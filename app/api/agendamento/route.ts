import { NextRequest, NextResponse } from "next/server";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { createHash } from "node:crypto";
import {
  getBookingAdminDb,
  getBookingBarbershopId,
} from "@/lib/firebase-admin-booking";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AppointmentData = {
  hora?: string;
  status?: string;
  duracaoMinutos?: number;
};

type BookingPayload = {
  name?: unknown;
  phone?: unknown;
  birthDate?: unknown;
  serviceIds?: unknown;
  barberId?: unknown;
  date?: unknown;
  time?: unknown;
  website?: unknown;
};

function errorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function validId(value: unknown): value is string {
  return typeof value === "string" && /^[A-Za-z0-9_-]{1,180}$/.test(value);
}

function validDate(value: unknown): value is string {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function validTime(value: unknown): value is string {
  return typeof value === "string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function timeToMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(value: number) {
  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
}

function roundedDuration(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 30;
  return Math.min(240, Math.max(30, Math.ceil(value / 30) * 30));
}

function occupiedSlots(appointments: AppointmentData[]) {
  const occupied = new Set<string>();

  appointments.forEach((appointment) => {
    if (!appointment.hora || appointment.status === "cancelado") return;
    const duration = roundedDuration(appointment.duracaoMinutos);
    const start = timeToMinutes(appointment.hora);
    for (let offset = 0; offset < duration; offset += 30) {
      occupied.add(minutesToTime(start + offset));
    }
  });

  return occupied;
}

function bookingContext() {
  const db = getBookingAdminDb();
  const barbershopId = getBookingBarbershopId();
  if (!db || !barbershopId) return null;
  return { db, barbershopId };
}

export async function GET(request: NextRequest) {
  const context = bookingContext();
  if (!context) {
    return errorResponse("Agendamento online ainda não configurado.", 503);
  }

  const { db, barbershopId } = context;
  const action = request.nextUrl.searchParams.get("action") || "bootstrap";

  try {
    if (action === "bootstrap") {
      const shopRef = db.collection("barbearias").doc(barbershopId);
      const [shopSnapshot, serviceSnapshot, barberSnapshot] = await Promise.all([
        shopRef.get(),
        shopRef.collection("servicos").get(),
        shopRef.collection("barbeiros").get(),
      ]);

      if (!shopSnapshot.exists) {
        return errorResponse("Barbearia não encontrada no GBarber.", 404);
      }

      return NextResponse.json(
        {
          shopName: shopSnapshot.data()?.nome || "DiFaria Barber Music",
          services: serviceSnapshot.docs.map((serviceDoc) => ({
            id: serviceDoc.id,
            nome: String(serviceDoc.data().nome || "Serviço"),
            preco:
              typeof serviceDoc.data().preco === "number"
                ? serviceDoc.data().preco
                : null,
            duracaoMinutos:
              typeof serviceDoc.data().duracaoMinutos === "number"
                ? roundedDuration(serviceDoc.data().duracaoMinutos)
                : null,
          })),
          barbers: barberSnapshot.docs.map((barberDoc) => ({
            id: barberDoc.id,
            nome: String(barberDoc.data().nome || "Profissional"),
          })),
        },
        { headers: { "Cache-Control": "private, max-age=60" } },
      );
    }

    if (action === "availability") {
      const barberId = request.nextUrl.searchParams.get("barberId");
      const date = request.nextUrl.searchParams.get("date");
      if (!validId(barberId) || !validDate(date)) {
        return errorResponse("Profissional ou data inválidos.");
      }

      const snapshot = await db
        .collection(`barbearias/${barbershopId}/atendimentos`)
        .where("barbeiroId", "==", barberId)
        .where("data", "==", date)
        .get();

      return NextResponse.json({
        appointments: snapshot.docs.map((appointmentDoc) => {
          const data = appointmentDoc.data();
          return {
            hora: typeof data.hora === "string" ? data.hora : "",
            status: typeof data.status === "string" ? data.status : "",
            duracaoMinutos: roundedDuration(data.duracaoMinutos),
          };
        }),
      });
    }

    return errorResponse("Ação inválida.", 404);
  } catch (error) {
    console.error("Erro ao consultar o GBarber:", error);
    return errorResponse("Não foi possível consultar a agenda agora.", 500);
  }
}

export async function POST(request: NextRequest) {
  const context = bookingContext();
  if (!context) {
    return errorResponse("Agendamento online ainda não configurado.", 503);
  }

  const { db, barbershopId } = context;
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const fingerprint = createHash("sha256")
    .update(
      `${process.env.GBARBER_BOOKING_RATE_LIMIT_SALT || process.env.GBARBER_FIREBASE_PROJECT_ID}:${forwardedFor || "unknown"}`,
    )
    .digest("hex");
  let payload: BookingPayload;
  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return errorResponse("Dados de agendamento inválidos.");
  }

  if (typeof payload.website === "string" && payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const phoneDigits = phone.replace(/\D/g, "");
  const birthDate =
    typeof payload.birthDate === "string" && validDate(payload.birthDate)
      ? payload.birthDate
      : null;
  const serviceIds = Array.isArray(payload.serviceIds)
    ? [...new Set(payload.serviceIds.filter(validId))]
    : [];
  const barberId = payload.barberId;
  const date = payload.date;
  const time = payload.time;

  if (name.length < 2 || name.length > 100 || phoneDigits.length < 10 || phoneDigits.length > 11) {
    return errorResponse("Informe um nome e um WhatsApp válidos.");
  }
  if (!validId(barberId) || !validDate(date) || !validTime(time)) {
    return errorResponse("Profissional, data ou horário inválidos.");
  }
  if (!serviceIds.length || serviceIds.length > 8) {
    return errorResponse("Escolha entre um e oito serviços.");
  }

  const selectedDay = new Date(`${date}T12:00:00-03:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 60);
  if (
    Number.isNaN(selectedDay.getTime()) ||
    selectedDay < today ||
    selectedDay > maxDate ||
    selectedDay.getDay() === 0
  ) {
    return errorResponse("A data escolhida não está disponível.");
  }

  try {
    const shopRef = db.collection("barbearias").doc(barbershopId);
    const barberRef = shopRef.collection("barbeiros").doc(barberId);
    const [barberSnapshot, ...serviceSnapshots] = await Promise.all([
      barberRef.get(),
      ...serviceIds.map((serviceId) =>
        shopRef.collection("servicos").doc(serviceId).get(),
      ),
    ]);

    if (!barberSnapshot.exists || serviceSnapshots.some((snapshot) => !snapshot.exists)) {
      return errorResponse("Profissional ou serviço não encontrado.", 404);
    }

    const services = serviceSnapshots.map((snapshot) => ({
      id: snapshot.id,
      nome: String(snapshot.data()?.nome || "Serviço"),
      preco:
        typeof snapshot.data()?.preco === "number"
          ? Number(snapshot.data()?.preco)
          : 0,
      duracaoMinutos: roundedDuration(snapshot.data()?.duracaoMinutos),
    }));
    const duration = Math.min(
      240,
      services.reduce((sum, service) => sum + service.duracaoMinutos, 0),
    );
    const closing = selectedDay.getDay() === 6 ? 16 * 60 : 20 * 60;
    const startMinutes = timeToMinutes(time);
    if (startMinutes < 9 * 60 || startMinutes + duration > closing || startMinutes % 30 !== 0) {
      return errorResponse("O horário não cabe no expediente selecionado.");
    }

    const total = services.reduce((sum, service) => sum + service.preco, 0);
    const commissionRate =
      typeof barberSnapshot.data()?.comissaoServico === "number"
        ? barberSnapshot.data()?.comissaoServico
        : 40;
    const slotId = `${barberId}_${date}_${time.replace(":", "")}`;
    const appointmentRef = shopRef.collection("atendimentos").doc(slotId);
    const customerRef = shopRef.collection("clientes").doc();
    const rateLimitRef = db.collection("booking_rate_limits").doc(fingerprint);
    const appointmentsQuery = shopRef
      .collection("atendimentos")
      .where("barbeiroId", "==", barberId)
      .where("data", "==", date);

    await db.runTransaction(async (transaction) => {
      const [existingSlot, dayAppointments, rateLimitSnapshot] = await Promise.all([
        transaction.get(appointmentRef),
        transaction.get(appointmentsQuery),
        transaction.get(rateLimitRef),
      ]);
      const occupied = occupiedSlots(
        dayAppointments.docs.map((appointmentDoc) => appointmentDoc.data()),
      );
      const neededSlots = Array.from(
        { length: Math.ceil(duration / 30) },
        (_, index) => minutesToTime(startMinutes + index * 30),
      );

      if (
        (existingSlot.exists && existingSlot.data()?.status !== "cancelado") ||
        neededSlots.some((slot) => occupied.has(slot))
      ) {
        throw new Error("SLOT_UNAVAILABLE");
      }

      const now = Date.now();
      const previousWindow = rateLimitSnapshot.data()?.windowStartedAt;
      const previousWindowMs =
        previousWindow instanceof Timestamp ? previousWindow.toMillis() : 0;
      const sameWindow = now - previousWindowMs < 30 * 60 * 1000;
      const previousCount = sameWindow
        ? Number(rateLimitSnapshot.data()?.count || 0)
        : 0;
      if (previousCount >= 5) throw new Error("RATE_LIMIT");

      transaction.set(
        rateLimitRef,
        {
          count: previousCount + 1,
          windowStartedAt: sameWindow
            ? previousWindow
            : FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      );

      transaction.set(customerRef, {
        nome: name,
        telefone: phone,
        dataNascimento: birthDate,
        pontosFidelidade: 0,
        origem: "site-difaria",
        createdAt: FieldValue.serverTimestamp(),
      });
      transaction.set(appointmentRef, {
        cliente: name,
        clienteId: customerRef.id,
        barbeiroId: barberId,
        barbeiroNome: String(barberSnapshot.data()?.nome || ""),
        servicoIds: services.map((service) => service.id),
        servicoNomes: services.map((service) => service.nome).join(", "),
        valor: total,
        comissao: (total * Number(commissionRate)) / 100,
        duracaoMinutos: duration,
        data: date,
        hora: time,
        status: "agendado",
        origem: "site-difaria",
        createdAt: Timestamp.fromDate(new Date(`${date}T${time}:00-03:00`)),
        registeredAt: FieldValue.serverTimestamp(),
      });
    });

    return NextResponse.json({
      ok: true,
      appointment: {
        barberName: String(barberSnapshot.data()?.nome || ""),
        serviceNames: services.map((service) => service.nome),
        total,
        duration,
        date,
        time,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "SLOT_UNAVAILABLE") {
      return errorResponse("Esse horário acabou de ser reservado. Escolha outro.", 409);
    }
    if (error instanceof Error && error.message === "RATE_LIMIT") {
      return errorResponse(
        "Muitos agendamentos foram enviados deste acesso. Fale com a equipe pelo WhatsApp.",
        429,
      );
    }
    console.error("Erro ao registrar agendamento:", error);
    return errorResponse("Não foi possível concluir o agendamento agora.", 500);
  }
}

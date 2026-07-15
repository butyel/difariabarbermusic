"use client";

import Link from "next/link";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  LoaderCircle,
  MessageCircle,
  Scissors,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { COMPANY, SERVICES, whatsappUrl } from "@/lib/constants";

type LiveService = {
  id: string;
  nome: string;
  preco: number | null;
  duracaoMinutos: number;
};

type Barber = {
  id: string;
  nome: string;
  comissaoServico?: number;
};

type OccupiedAppointment = {
  hora?: string;
  status?: string;
  duracaoMinutos?: number;
};

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const shortDate = new Intl.DateTimeFormat("pt-BR", {
  weekday: "short",
  day: "2-digit",
  month: "short",
});

const longDate = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function localIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromIso(value: string) {
  return new Date(`${value}T12:00:00`);
}

function timeToMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(value: number) {
  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
}

function serviceDuration(name: string) {
  const normalized = name.toLocaleLowerCase("pt-BR");
  const match = SERVICES.find((service) =>
    normalized.includes(service.title.toLocaleLowerCase("pt-BR")),
  );
  const duration = Number(match?.duration?.match(/\d+/)?.[0]);
  return duration > 0 ? Math.ceil(duration / 30) * 30 : 30;
}

function openDates() {
  const dates: Date[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  while (dates.length < 21) {
    if (cursor.getDay() !== 0) dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function availableTimes(date: Date, duration: number) {
  const closing = date.getDay() === 6 ? 16 * 60 : 20 * 60;
  const times: string[] = [];

  for (let current = 9 * 60; current + duration <= closing; current += 30) {
    times.push(minutesToTime(current));
  }

  return times;
}

function occupiedSlots(appointments: OccupiedAppointment[]) {
  const occupied = new Set<string>();

  appointments.forEach((appointment) => {
    if (!appointment.hora || appointment.status === "cancelado") return;
    const duration = Math.max(30, appointment.duracaoMinutos || 30);
    const start = timeToMinutes(appointment.hora);

    for (let offset = 0; offset < duration; offset += 30) {
      occupied.add(minutesToTime(start + offset));
    }
  });

  return occupied;
}

function phoneMask(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function fallbackServices(): LiveService[] {
  return SERVICES.filter((service) => service.slug).map((service) => ({
    id: `fallback-${service.slug}`,
    nome: service.title,
    preco: null,
    duracaoMinutos: serviceDuration(service.title),
  }));
}

export default function BookingExperience() {
  const dates = useMemo(openDates, []);
  const [services, setServices] = useState<LiveService[]>(fallbackServices);
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [shopName, setShopName] = useState(COMPANY.name);
  const [loading, setLoading] = useState(true);
  const [onlineMode, setOnlineMode] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [barberId, setBarberId] = useState("");
  const [selectedDate, setSelectedDate] = useState(localIsoDate(dates[0]));
  const [selectedTime, setSelectedTime] = useState("");
  const [occupied, setOccupied] = useState<Set<string>>(new Set());
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const chosenServices = services.filter((service) =>
    selectedServices.includes(service.id),
  );
  const chosenBarber = barbers.find((barber) => barber.id === barberId);
  const duration = Math.max(
    30,
    chosenServices.reduce((total, service) => total + service.duracaoMinutos, 0),
  );
  const total = chosenServices.reduce(
    (sum, service) => sum + (service.preco || 0),
    0,
  );
  const day = dateFromIso(selectedDate);
  const times = availableTimes(day, duration);

  useEffect(() => {
    async function loadBookingData() {
      try {
        const response = await fetch("/api/agendamento?action=bootstrap", {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        const data = (await response.json()) as {
          error?: string;
          shopName?: string;
          services?: Array<{
            id: string;
            nome: string;
            preco: number | null;
            duracaoMinutos: number | null;
          }>;
          barbers?: Barber[];
        };
        if (!response.ok) throw new Error(data.error || "Integração indisponível.");

        setShopName(data.shopName || COMPANY.name);
        const liveServices = (data.services || []).map((service) => {
          return {
            id: service.id,
            nome: String(service.nome || "Serviço"),
            preco: typeof service.preco === "number" ? service.preco : null,
            duracaoMinutos:
              typeof service.duracaoMinutos === "number"
                ? Math.max(30, Math.ceil(service.duracaoMinutos / 30) * 30)
                : serviceDuration(String(service.nome || "")),
          };
        });
        const liveBarbers = data.barbers || [];

        if (!liveServices.length || !liveBarbers.length) {
          throw new Error("Cadastro de agendamento incompleto no GBarber.");
        }

        setServices(liveServices);
        setBarbers(liveBarbers);
        setBarberId(liveBarbers[0].id);
        setOnlineMode(true);
      } catch (loadError) {
        console.info("Agendamento online em modo de contingência:", loadError);
        setError(
          "O agendamento online está temporariamente indisponível. Você ainda pode montar o pedido e concluir pelo WhatsApp.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadBookingData();
  }, []);

  useEffect(() => {
    if (!onlineMode || !barberId || !selectedDate) {
      setOccupied(new Set());
      return;
    }

    let active = true;

    async function loadOccupiedTimes() {
      setLoadingTimes(true);
      setSelectedTime("");
      try {
        const params = new URLSearchParams({
          action: "availability",
          barberId,
          date: selectedDate,
        });
        const response = await fetch(`/api/agendamento?${params}`, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        const data = (await response.json()) as {
          error?: string;
          appointments?: OccupiedAppointment[];
        };
        if (!response.ok) throw new Error(data.error || "Consulta indisponível.");
        const appointments = data.appointments || [];
        if (active) setOccupied(occupiedSlots(appointments));
      } catch (loadError) {
        console.error("Não foi possível consultar os horários:", loadError);
        if (active) {
          setOccupied(new Set());
          setError(
            "Não conseguimos confirmar a disponibilidade agora. Tente novamente ou conclua pelo WhatsApp.",
          );
        }
      } finally {
        if (active) setLoadingTimes(false);
      }
    }

    loadOccupiedTimes();
    return () => {
      active = false;
    };
  }, [barberId, onlineMode, selectedDate]);

  useEffect(() => {
    setSelectedTime("");
  }, [duration]);

  function toggleService(serviceId: string) {
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );
    setError("");
  }

  function summaryMessage() {
    const serviceNames = chosenServices.map((service) => service.nome).join(", ");
    const professional = chosenBarber?.nome || "primeiro profissional disponível";
    return `Olá, vim pelo site da DiFaria e gostaria de agendar.\n\nCliente: ${name || "a informar"}\nServiço(s): ${serviceNames || "a definir"}\nProfissional: ${professional}\nData: ${longDate.format(day)}\nHorário: ${selectedTime || "a combinar"}`;
  }

  async function confirmBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const phoneDigits = phone.replace(/\D/g, "");
    if (!name.trim() || phoneDigits.length < 10) {
      setError("Informe seu nome e um WhatsApp válido.");
      return;
    }
    if (!selectedServices.length || !selectedDate || !selectedTime) {
      setError("Escolha o serviço, a data e o horário.");
      return;
    }
    if (!consent) {
      setError("Confirme o uso dos dados para realizar o agendamento.");
      return;
    }
    if (website) return;

    if (!onlineMode || !barberId) {
      window.open(whatsappUrl(summaryMessage()), "_blank", "noopener,noreferrer");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/agendamento", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone,
          birthDate,
          serviceIds: chosenServices.map((service) => service.id),
          barberId,
          date: selectedDate,
          time: selectedTime,
          website,
        }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Não foi possível concluir o agendamento.");
      }

      setSuccess(true);
      setOccupied((current) => {
        const next = new Set(current);
        for (let offset = 0; offset < duration; offset += 30) {
          next.add(minutesToTime(timeToMinutes(selectedTime) + offset));
        }
        return next;
      });
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Não foi possível concluir o agendamento.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <section className="booking-success" aria-live="polite">
        <CheckCircle2 aria-hidden="true" />
        <span className="eyebrow dark">Tudo certo</span>
        <h1>Horário confirmado.</h1>
        <p>
          {name}, esperamos você em {longDate.format(day)}, às {selectedTime}.
          Seu atendimento ficou registrado no GBarber.
        </p>
        <div className="booking-success-summary">
          <span>{chosenServices.map((service) => service.nome).join(" + ")}</span>
          <span>{chosenBarber?.nome}</span>
          {total > 0 && <strong>{money.format(total)}</strong>}
        </div>
        <div className="booking-success-actions">
          <Link className="button" href="/">
            <span>Voltar ao início</span>
          </Link>
          <a
            className="button button-booking-outline"
            href={whatsappUrl(`Olá, acabei de agendar pelo site para ${longDate.format(day)} às ${selectedTime}.`)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            <span>Falar com a equipe</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <form className="booking-shell" onSubmit={confirmBooking} noValidate>
      <div className="booking-heading">
        <div>
          <span className="eyebrow">Agendamento online</span>
          <h1>Escolha seu próximo horário.</h1>
        </div>
        <p>
          Monte seu atendimento com calma. A disponibilidade é consultada no
          GBarber e seu horário é registrado ao confirmar.
        </p>
      </div>

      {!loading && !onlineMode && (
        <div className="booking-notice" role="status">
          <MessageCircle aria-hidden="true" />
          <div>
            <strong>Agendamento guiado disponível</strong>
            <p>
              Enquanto a conexão definitiva do GBarber é ativada, você pode
              escolher serviço, data e horário e concluir pelo WhatsApp.
            </p>
          </div>
        </div>
      )}

      {error && <div className="booking-error" role="alert">{error}</div>}

      <div className="booking-layout">
        <div className="booking-flow">
          <section className="booking-panel" aria-labelledby="booking-services-title">
            <div className="booking-panel-title">
              <span>01</span>
              <div>
                <Scissors aria-hidden="true" />
                <h2 id="booking-services-title">Escolha o serviço</h2>
              </div>
            </div>
            {loading ? (
              <div className="booking-loading"><LoaderCircle aria-hidden="true" /> Carregando serviços...</div>
            ) : (
              <div className="booking-services-grid">
                {services.map((service) => {
                  const selected = selectedServices.includes(service.id);
                  return (
                    <button
                      className={`booking-service${selected ? " selected" : ""}`}
                      key={service.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleService(service.id)}
                    >
                      <span className="booking-check" aria-hidden="true">
                        {selected && <Check />}
                      </span>
                      <strong>{service.nome}</strong>
                      <small>
                        {service.preco !== null
                          ? money.format(service.preco)
                          : "Consultar valor"}
                        {" · "}{service.duracaoMinutos} min
                      </small>
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          <section className="booking-panel" aria-labelledby="booking-barber-title">
            <div className="booking-panel-title">
              <span>02</span>
              <div>
                <UserRound aria-hidden="true" />
                <h2 id="booking-barber-title">Profissional</h2>
              </div>
            </div>
            {onlineMode ? (
              <div className="booking-options-row">
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    type="button"
                    className={`booking-option${barberId === barber.id ? " selected" : ""}`}
                    aria-pressed={barberId === barber.id}
                    onClick={() => {
                      setBarberId(barber.id);
                      setError("");
                    }}
                  >
                    <UserRound aria-hidden="true" />
                    <span>{barber.nome}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="booking-fallback-professional">
                <UserRound aria-hidden="true" />
                <div>
                  <strong>Equipe {shopName}</strong>
                  <span>Confirmaremos o profissional pelo WhatsApp.</span>
                </div>
              </div>
            )}
          </section>

          <section className="booking-panel" aria-labelledby="booking-date-title">
            <div className="booking-panel-title">
              <span>03</span>
              <div>
                <CalendarDays aria-hidden="true" />
                <h2 id="booking-date-title">Data</h2>
              </div>
            </div>
            <div className="booking-date-grid">
              {dates.map((date) => {
                const iso = localIsoDate(date);
                return (
                  <button
                    key={iso}
                    type="button"
                    className={`booking-date${selectedDate === iso ? " selected" : ""}`}
                    aria-pressed={selectedDate === iso}
                    onClick={() => {
                      setSelectedDate(iso);
                      setError("");
                    }}
                  >
                    <span>{shortDate.format(date).replace(".", "")}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="booking-panel" aria-labelledby="booking-time-title">
            <div className="booking-panel-title">
              <span>04</span>
              <div>
                <Clock3 aria-hidden="true" />
                <h2 id="booking-time-title">Horário</h2>
              </div>
            </div>
            {loadingTimes ? (
              <div className="booking-loading"><LoaderCircle aria-hidden="true" /> Consultando horários...</div>
            ) : (
              <div className="booking-times-grid">
                {times.map((time) => {
                  const requiredSlots = Array.from(
                    { length: Math.ceil(duration / 30) },
                    (_, index) => minutesToTime(timeToMinutes(time) + index * 30),
                  );
                  const unavailable = requiredSlots.some((slot) => occupied.has(slot));
                  return (
                    <button
                      key={time}
                      type="button"
                      disabled={unavailable}
                      className={`booking-time${selectedTime === time ? " selected" : ""}`}
                      aria-pressed={selectedTime === time}
                      onClick={() => {
                        setSelectedTime(time);
                        setError("");
                      }}
                    >
                      {time}
                      {unavailable && <small>ocupado</small>}
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          <section className="booking-panel" aria-labelledby="booking-customer-title">
            <div className="booking-panel-title">
              <span>05</span>
              <div>
                <ShieldCheck aria-hidden="true" />
                <h2 id="booking-customer-title">Seus dados</h2>
              </div>
            </div>
            <div className="booking-fields">
              <label>
                <span>Nome completo *</span>
                <input
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Como podemos chamar você?"
                />
              </label>
              <label>
                <span>WhatsApp *</span>
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  maxLength={15}
                  onChange={(event) => setPhone(phoneMask(event.target.value))}
                  placeholder="(18) 90000-0000"
                />
              </label>
              <label>
                <span>Data de nascimento</span>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
                />
              </label>
              <label className="booking-honeypot" aria-hidden="true">
                <span>Website</span>
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </label>
            </div>
            <label className="booking-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                Autorizo o uso destes dados para realizar e administrar meu
                agendamento, conforme a <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
              </span>
            </label>
          </section>
        </div>

        <aside className="booking-summary">
          <span className="eyebrow">Resumo</span>
          <h2>Seu atendimento</h2>
          <dl>
            <div>
              <dt>Serviço</dt>
              <dd>{chosenServices.map((service) => service.nome).join(" + ") || "Escolha ao lado"}</dd>
            </div>
            <div>
              <dt>Profissional</dt>
              <dd>{chosenBarber?.nome || "A confirmar"}</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>{longDate.format(day)}</dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>{selectedTime || "Escolha ao lado"}</dd>
            </div>
            <div>
              <dt>Duração estimada</dt>
              <dd>{duration} minutos</dd>
            </div>
          </dl>
          {chosenServices.length > 0 && total > 0 && (
            <div className="booking-total">
              <span>Total</span>
              <strong>{money.format(total)}</strong>
            </div>
          )}
          <button
            className="button booking-submit"
            type="submit"
            disabled={submitting}
          >
            {submitting ? <LoaderCircle className="booking-spinner" aria-hidden="true" /> : onlineMode ? <Check aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
            <span>{submitting ? "Confirmando..." : onlineMode ? "Confirmar agendamento" : "Concluir pelo WhatsApp"}</span>
          </button>
          <p className="booking-summary-note">
            <ShieldCheck aria-hidden="true" /> Seus dados serão usados somente
            para organizar este atendimento.
          </p>
          <a className="booking-help" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Precisa de ajuda? Fale com a equipe <ChevronRight aria-hidden="true" />
          </a>
        </aside>
      </div>
    </form>
  );
}

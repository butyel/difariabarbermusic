"use client";

import { useEffect, useRef } from "react";
import { COMPANY } from "@/lib/constants";

function pinSvg(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="64" viewBox="0 0 48 64">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#b8962f"/>
    </linearGradient>
    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.4"/>
    </filter>
  </defs>
  <path d="M24 2C11 2 2 11.5 2 24.5c0 17 22 37.5 22 37.5s22-20.5 22-37.5C46 11.5 37 2 24 2z" fill="url(#g)" filter="url(#s)" stroke="#f0eadc" stroke-width="1.5"/>
  <circle cx="24" cy="23" r="13" fill="#071710" stroke="#d4af37" stroke-width="2"/>
  <text x="24" y="28" text-anchor="middle" fill="#d4af37" font-size="11" font-weight="bold" font-family="Montserrat,sans-serif">DF</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    const el = mapRef.current;
    if (!el) return;

    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    if (!key) return;

    initialized.current = true;

    const position = {
      lat: COMPANY.coordinates.lat,
      lng: COMPANY.coordinates.lng,
    };

    const init = () => {
      const g = (window as any).google.maps;

      const map = new g.Map(el, {
        center: position,
        zoom: 17,
        disableDefaultUI: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#0b1f16" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#071710" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#72816a" }] },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#1c3d2c" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#26513a" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8aa08f" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#1f4532" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#26513a" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#0d2b1e" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#3c6b50" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#143423" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b8a76" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#143423" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#143423" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1a3a2a" }],
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b8a76" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{ color: "#0f281c" }],
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#0b1f16" }],
          },
          {
            featureType: "building",
            elementType: "geometry",
            stylers: [{ color: "#143423" }],
          },
          {
            featureType: "building",
            elementType: "geometry.fill",
            stylers: [{ color: "#143423" }],
          },
          {
            featureType: "building",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1c3d2c" }],
          },
        ],
      });

      new g.Circle({
        strokeColor: "#d4af37",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: "#d4af37",
        fillOpacity: 0.08,
        center: position,
        radius: 80,
        map,
      });

      const marker = new g.Marker({
        position,
        map,
        icon: {
          url: pinSvg(),
          anchor: { x: 24, y: 62 } as any,
        },
        title: COMPANY.name,
      });

      const info = new g.InfoWindow({
        content: `<div style="font-family:Montserrat,sans-serif;padding:8px 4px 4px;color:#071710;min-width:200px">
          <strong style="font-size:1rem;display:block;margin-bottom:4px;color:#071710">${COMPANY.name}</strong>
          <span style="font-size:0.85rem;color:#4e5b53;display:block">${COMPANY.address.full}</span>
          <a href="${COMPANY.mapsUrl}" target="_blank" rel="noreferrer" style="display:inline-block;margin-top:8px;font-size:0.8rem;color:#071710;text-decoration:underline">Abrir no Google Maps →</a>
        </div>`,
      });

      marker.addListener("click", () => info.open(map, marker));

      setTimeout(() => info.open(map, marker), 800);
    };

    if ((window as any).google?.maps) {
      init();
    } else {
      const callback = `_gmap_${Date.now()}`;
      (window as any)[callback] = () => {
        init();
        delete (window as any)[callback];
      };
      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callback}&loading=async`;
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: 400, borderRadius: 12, overflow: "hidden" }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";
import { COMPANY } from "@/lib/constants";

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
        zoom: 16,
        disableDefaultUI: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#071710" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#0c2117" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#72816a" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#143423" }] },
          { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8aa08f" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#0a1f14" }] },
          { featureType: "poi", elementType: "geometry", stylers: [{ color: "#0c2117" }] },
          { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#143423" }] },
        ],
      });

      const marker = new g.Marker({
        position,
        map,
        icon: {
          url: "/images/logo.png",
          scaledSize: new g.Size(48, 18),
          optimized: false,
        },
        title: COMPANY.name,
      });

      const info = new g.InfoWindow({
        content: `<div style="font-family:Montserrat,sans-serif;padding:4px;color:#071710;min-width:180px">
          <strong style="font-size:1rem;display:block;margin-bottom:4px">${COMPANY.name}</strong>
          <span style="font-size:0.85rem;color:#4e5b53">${COMPANY.address.full}</span>
        </div>`,
      });

      marker.addListener("click", () => info.open(map, marker));
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

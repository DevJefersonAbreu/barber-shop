"use client";

import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import { fromLonLat } from "ol/proj";

const Location: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [vectorSource] = useState(new VectorSource());

  useEffect(() => {
    if (!mapRef.current) return;

    new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
        }),
      ],
      view: new View({
        center: fromLonLat([-46.6333, -23.5505]),
        zoom: 12,
      }),
    });
  }, [vectorSource]);

  const iconPath = "/assets/imageMap/marker-icon.png";

  const addresses = [
    {
      coords: [-46.6333, -23.5505],
      name: "Rua das Flores, Bairro Jardim, Nº 123",
    },
    {
      coords: [-46.6905, -23.5644],
      name: "Av. Principal, Bairro Central, Nº 456",
    },
    {
      coords: [-46.7105, -23.5233],
      name: "Travessa Alegre, Bairro Novo, Nº 789",
    },
  ];

  useEffect(() => {
    addresses.forEach((address) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat(address.coords)),
        name: address.name,
      });

      marker.setStyle(
        new Style({
          image: new Icon({
            src: iconPath,
            scale: 0.7, // Ícone maior para os marcadores
          }),
        })
      );

      vectorSource.addFeature(marker);
    });
  }, [vectorSource]);

  return (
    <S.Container>
      <S.TextSection>
        <h2>Encontre-nos Aqui!</h2>
        <p>Confira abaixo os nossos endereços e descubra como é fácil nos encontrar!</p>
        <ul>
          {addresses.map((address, index) => (
            <li key={index}>
              <img
                src={iconPath}
                alt="Ícone de endereço"
                style={{ width: "16px", marginRight: "8px" }}
              />
              {address.name}
            </li>
          ))}
        </ul>

        {/* Novo Trecho Adicionado */}
        <S.TopSection>
          <S.WorkingHours>
            <p>🕒 Seg a Sex de 8hrs às 20hrs - Sáb 8hrs às 19hrs</p>
            <S.WhatsAppButton
              href="https://wa.me/31973412532"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Agende seu horário e venha nos conhecer!
            </S.WhatsAppButton>
          </S.WorkingHours>
        </S.TopSection>
       
      </S.TextSection>
      <S.MapSection>
        <div ref={mapRef} className="map" />
      </S.MapSection>
    </S.Container>
  );
};

export default Location;

"use client";

import React from "react";
import * as S from "./styles";

interface GalleryItem {
  id: number;
  imageUrl: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: "/assets/galleryImage/gallery1.jpg", description: "Classic Haircut" },
  { id: 2, imageUrl: "/assets/galleryImage/gallery2.jpg", description: "Beard Trim" },
  { id: 3, imageUrl: "/assets/galleryImage/gallery3.jpg", description: "Hot Towel Shave" },
  { id: 4, imageUrl: "/assets/galleryImage/gallery4.jpg", description: "Hair Styling" },
  { id: 5, imageUrl: "/assets/galleryImage/gallery5.jpg", description: "Facial Treatment" },
  { id: 6, imageUrl: "/assets/galleryImage/gallery6.jpg", description: "Grooming Products" },
  { id: 7, imageUrl: "/assets/galleryImage/gallery7.jpg", description: "Straight Razor Shave" },
  { id: 8, imageUrl: "/assets/galleryImage/gallery8.jpg", description: "Hair Coloring" },
  { id: 9, imageUrl: "/assets/galleryImage/gallery9.jpg", description: "Scalp Treatment" },
  { id: 10, imageUrl: "/assets/galleryImage/gallery10.jpg", description: "Mustache Trim" },
  { id: 11, imageUrl: "/assets/galleryImage/gallery11.jpg", description: "Kids Haircut" },
  { id: 12, imageUrl: "/assets/galleryImage/gallery12.jpg", description: "Barbershop Interior" }
];

const Gallery: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Our Signature Services</S.Title>
      <S.GalleryGrid>
        {galleryItems.map((item) => (
          <S.GalleryItem key={item.id}>
            <S.GalleryImage src={item.imageUrl} alt={item.description} />
            <S.GalleryOverlay>
              <S.GalleryText>{item.description}</S.GalleryText>
            </S.GalleryOverlay>
          </S.GalleryItem>
        ))}
      </S.GalleryGrid>
    </S.Container>
  );
};

export default Gallery;


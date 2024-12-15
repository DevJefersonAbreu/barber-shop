"use client";

import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";
import Gallery from "@/components/gallery/gallery";



const BarberGallery: React.FC = () => {
  return (
    <S.Container>
      <Header/>
      <Gallery/>
   
    </S.Container>
  );
};

export default BarberGallery;

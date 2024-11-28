"use client";

import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";

const LogoHome: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.LogoContainer>
        <S.LogoImage src="/assets/logoHome/barber-shop.png" alt="Logo" />
      </S.LogoContainer>
    </S.Container>
  );
};

export default LogoHome;

"use client";

import React from "react";
import * as S from "./styles";

const MainProducts: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.GridContainer>
          <S.ProductCard>
            <S.Image src="/assets/onlineStoreImage/kit-barba-padrao.jpg" alt="KET.CLUB Sweatshirt" />
            <S.ProductInfo>
              <S.Brand>KIT BARBA PRIMEUM</S.Brand>
              <S.Price>$189.99</S.Price>
            </S.ProductInfo>
          </S.ProductCard>
          <S.ProductCard>
            <S.Image src="/assets/onlineStoreImage/kit-cabelo-prime.jpg" alt="Shuffle Essentials Collection" />
            <S.ProductInfo>
              <S.Brand>kIT CABELO PRIMEUM</S.Brand>
              <S.Description>$289.99</S.Description>
            </S.ProductInfo>
          </S.ProductCard>
        </S.GridContainer>
      </S.Header>
      <S.MainFeature>
        <S.FeatureImage src="/assets/onlineStoreImage/kit-cabelo.jpg" alt="Featured Collection" />
        <S.FeatureOverlay>
          <S.FeatureText>
            <S.Title>KIT CABELO PRIMEUM</S.Title>
            <S.Subtitle>$489.99</S.Subtitle>
          </S.FeatureText>
        </S.FeatureOverlay>
      </S.MainFeature>
    </S.Container>
  );
};

export default MainProducts;


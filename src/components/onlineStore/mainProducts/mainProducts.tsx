"use client";

import React, { useState } from "react";
import * as S from "./styles";

const MainProducts: React.FC = () => {
  const [cart, setCart] = useState<{ name: string; price: string }[]>([]);
  const [purchasedProducts, setPurchasedProducts] = useState<string[]>([]);

  const handleBuy = (name: string, price: string) => {
    setCart((prev) => [...prev, { name, price }]);
    setPurchasedProducts((prev) => [...prev, name]);
  };

  const handleCancel = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
    setPurchasedProducts((prev) => prev.filter((product) => product !== name));
  };

  const renderButton = (name: string, price: string) => {
    if (purchasedProducts.includes(name)) {
      return (
        <S.CancelButton onClick={() => handleCancel(name)}>
          Cancelar
        </S.CancelButton>
      );
    }

    return (
      <S.BuyButton onClick={() => handleBuy(name, price)}>
        Comprar
      </S.BuyButton>
    );
  };

  return (
    <S.Container>
      <S.Header>
        <S.GridContainer>
          <S.ProductCard>
            <S.Image src="/assets/onlineStoreImage/kit-barba-padrao.jpg" alt="KIT BARBA PREMIUM" />
            <S.ProductInfo>
              <S.Brand>KIT BARBA PREMIUM</S.Brand>
              <div className="price-button">
                <S.Price>$189.99</S.Price>
                {renderButton("KIT BARBA PREMIUM", "$189.99")}
              </div>
            </S.ProductInfo>
          </S.ProductCard>

          <S.ProductCard>
            <S.Image src="/assets/onlineStoreImage/kit-cabelo-prime.jpg" alt="KIT MASCULINO PREMIUM" />
            <S.ProductInfo>
              <S.Brand>KIT MASCULINO PREMIUM</S.Brand>
              <div className="price-button">
                <S.Price>$289.99</S.Price>
                {renderButton("KIT MASCULINO PREMIUM", "$289.99")}
              </div>
            </S.ProductInfo>
          </S.ProductCard>
        </S.GridContainer>
      </S.Header>

      <S.MainFeature>
        <S.FeatureImage src="/assets/onlineStoreImage/kit-cabelo.jpg" alt="KIT CABELO E BARBA PREMIUM" />
        <S.FeatureOverlay>
          <S.FeatureText>
            <S.Title>KIT CABELO E BARBA PREMIUM</S.Title>
            <div className="price-button2">
              <S.Subtitle>$489.99</S.Subtitle>
              {renderButton("KIT CABELO E BARBA PREMIUM", "$489.99")}
            </div>
          </S.FeatureText>
        </S.FeatureOverlay>
      </S.MainFeature>
    </S.Container>
  );
};

export default MainProducts;

"use client";

import React from "react";
import * as S from "./styles";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pomada Modeladora",
    price: 49.90,
    image: "/assets/onlineStoreImage/pomada-modeladora.jpg",
    description: "Pomada modeladora com fixação forte"
  },
  {
    id: 2,
    name: "Óleo para Barba",
    price: 39.90,
    image: "/assets/onlineStoreImage/oleo-barba.jpg",
    description: "Óleo hidratante para barba"
  },
  {
    id: 3,
    name: "Shampoo Masculino",
    price: 34.90,
    image: "/assets/onlineStoreImage/shapoo.jpg",
    description: "Shampoo especial para cabelos masculinos"
  },
  {
    id: 4,
    name: "Navalha Profissional",
    price: 89.90,
    image: "/assets/onlineStoreImage/navalha.jpg",
    description: "Navalha profissional de barbeiro"
  },
  {
    id: 5,
    name: "Pente Profissional",
    price: 29.90,
    image: "/assets/onlineStoreImage/pente.jpg",
    description: "Pente profissional para barbeiro"
  },
  {
    id: 6,
    name: "Máquina de Corte",
    price: 199.90,
    image: "/assets/onlineStoreImage/maquina.jpg",
    description: "Máquina de corte profissional"
  },
  {
    id: 7,
    name: "Gel para Cabelo",
    price: 25.90,
    image: "/assets/onlineStoreImage/gel.jpg",
    description: "Gel fixador para cabelo"
  },
  {
    id: 8,
    name: "Kit Barba",
    price: 149.90,
    image: "/assets/onlineStoreImage/kit-barba.jpg",
    description: "Kit completo para cuidados com a barba"
  },
  {
    id: 9,
    name: "Tesoura Profissional",
    price: 129.90,
    image: "/assets/onlineStoreImage/tesoura.jpg",
    description: "Tesoura profissional para corte"
  },
  {
    id: 10,
    name: "Loção Pós Barba",
    price: 45.90,
    image: "/assets/onlineStoreImage/pos-barba.jpg",
    description: "Loção calmante pós barba"
  },
  {
    id: 11,
    name: "Talco Masculino",
    price: 19.90,
    image: "/assets/onlineStoreImage/talco.jpg",
    description: "Talco refrescante masculino"
  },
  {
    id: 12,
    name: "Escova de Barba",
    price: 59.90,
    image: "/assets/onlineStoreImage/escova-barba.png",
    description: "Escova especial para barba"
  }
];

const ProductCard: React.FC = () => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <S.Container>
      <S.ProductGrid>
        {products.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage src={product.image} alt={product.name} />
            <S.ProductInfo>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductDescription>{product.description}</S.ProductDescription>
              <S.PriceContainer>
                <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
                <S.BuyButton>
                  Comprar
                </S.BuyButton>
              </S.PriceContainer>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductGrid>
    </S.Container>
  );
};

export default ProductCard;


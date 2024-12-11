"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/onlineStore/productCard/productCard";
import Header from "@/components/shared/header/header";
import WhatsApp from "@/components/shared/whatsApp/whatsApp";
import SpecialOffers from "@/components/onlineStore/specialOffers/specialOffers";
import MainProducts from "@/components/onlineStore/mainProducts/mainProducts";
import Footer from "@/components/shared/footer/footer";



const OnlineStore: React.FC = () => {
  return (
    <S.Container>
        <Header/>
        <MainProducts/>
        <SpecialOffers/>
        <ProductCard/>
        <WhatsApp/>
        <Footer/>

    </S.Container>
  );
};

export default OnlineStore;

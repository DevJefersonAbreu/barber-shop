"use client"

import React from "react";
import * as S from "./styles"
import HomeVideo from "@/components/home/homeVideo/homePage";
import Header from "@/components/shared/hearder";


const Home: React.FC = () => {
    return (
      <S.Container>
        <Header/>
     <HomeVideo/>
      </S.Container>
    );
}

export default Home;
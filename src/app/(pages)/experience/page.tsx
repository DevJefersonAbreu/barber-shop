"use client";

import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";
import WhatsApp from "@/components/shared/whatsApp/whatsApp";
import Footer from "@/components/shared/footer/footer";
import CreateExperience from "@/components/experience/createExperience";



const OnlineStore: React.FC = () => {
  return (
    <S.Container>
        <Header/>
        <WhatsApp/>
        <CreateExperience/>
        <Footer/>

    </S.Container>
  );
};

export default OnlineStore;

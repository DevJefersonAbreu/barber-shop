"use client";
import React from "react";
import * as S from "./styles";
import { Footer } from "@/components/shared/footer/styles";
import Schedules from "@/components/schedules/schedules";
import { Header } from "@/components/shared/header/styles";



const Schedule: React.FC = () => {
  return (
    <S.Container>
     <Header  />
     <h1>Agende seu Horário</h1>
     <Schedules/>
     <Footer />
    </S.Container>
  );
};

export default Schedule;
"use client";

import React from "react";
import * as S from "./styles";
import ScheduleMyAppointment from "@/components/scheduleMyAppointment/scheduleMyAppointment";
import Header from "@/components/shared/header/header";


const ScheduleAppointment: React.FC = () => {
  return (
    <S.Container>
    <Header/>
    <ScheduleMyAppointment/>
    </S.Container>
  );
};

export default ScheduleAppointment;

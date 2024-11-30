"use client";

import React from "react";
import * as S from "./styles";

const ServiceTable: React.FC = () => {
  return (
    <S.Container>
      <S.Image
        src="/assets/imageServiceTable/service-table.png"
        alt="Service Table"
      />
      <S.ScheduleImage
        src="/assets/imageServiceTable/Schedule.gif"
        alt="Schedule Icon"
      />
    </S.Container>
  );
};

export default ServiceTable;


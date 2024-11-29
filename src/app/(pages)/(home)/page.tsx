"use client";

import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";
import LogoHome from "@/components/home/logoHome/logoHome";
import VideoHome from "@/components/home/videoHome/videoHome";
import WhatsApp from "@/components/shared/whatsApp/whatsApp";
import ImageScroll from "@/components/home/imageScroll/imageScroll";
import ScheduleTime from "@/components/home/scheduleTime/scheduleTime";
import AboutUs from "@/components/home/aboutUs/aboutUs";
import ServiceTable from "@/components/home/serviceTable/serviceTable";

const Home: React.FC = () => {
  return (
    <S.Container>
      <div id="videos-section" style={{ height: "100vh" }}>
        <Header />
        <VideoHome />
        <LogoHome />
        <WhatsApp />
        <ImageScroll />
      </div>
      <div id="about-us-section" style={{ height: "100vh" }}>
        <AboutUs />
      </div>
      <div id="service-table-section" style={{ height: "100vh" }}>
        <ServiceTable />
      </div>
    </S.Container>
  );
};

export default Home;

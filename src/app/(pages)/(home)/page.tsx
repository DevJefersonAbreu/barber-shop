"use client";

import React from "react";
import * as S from "./styles";
import Header from "@/components/shared/header/header";
import LogoHome from "@/components/home/logoHome/logoHome";
import VideoHome from "@/components/home/videoHome/videoHome";
import WhatsApp from "@/components/shared/whatsApp/whatsApp";
import ImageScroll from "@/components/home/imageScroll/imageScroll";
import AboutUs from "@/components/home/aboutUs/aboutUs";
import ServiceTable from "@/components/home/serviceTable/serviceTable";
import Location from "@/components/home/location/location"; 
import Footer from "@/components/shared/footer/footer"; 

const Home: React.FC = () => {
  return (
    <S.Container>
      <div id="videos-section" style={{ width: "100%", height: "160vh" }}>
        <Header  />
        <VideoHome />
        <LogoHome />
        <WhatsApp />
        <ImageScroll />
      </div>
      <div id="about-us-section" style={{ width: "100%", height: "160vh" }}>
        <AboutUs />
      </div>
      <div id="service-table-section" style={{ width: "100%", height: "100vh"  }}>
        <ServiceTable />
      </div>
      <div id="location-section" style={{ width: "100%", height: "75vh" }}>
        <Location />
      </div>
      <div id="footer-section">
        <Footer />
      </div>
    </S.Container>
  );
};

export default Home;

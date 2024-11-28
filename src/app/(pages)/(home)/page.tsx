"use client"

import React from "react";
import * as S from "./styles"
import Header from "@/components/shared/header/header";
import LogoHome from "@/components/home/logoHome/logoHome";
import VideoHome from "@/components/home/videoHome/videoHome";
import WhatsApp from "@/components/shared/whatsApp/whatsApp";
import ImageScroll from "@/components/home/imageScroll/imageScroll";
import ScheduleTime from "@/components/home/scheduleTime/scheduleTime";



const Home: React.FC = () => {
    return (
      <S.Container>
        <Header/>
     <VideoHome/>
     <LogoHome/>
     <WhatsApp/>
     <ImageScroll/>
     <ScheduleTime/>
      </S.Container>
    );
}

export default Home;
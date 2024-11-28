"use client";

import Link from "next/link";
import * as S from "./styles";

const WhatsApp: React.FC = () => {
  return (
    <S.WhatsAppContainer>
      <Link href="https://fake.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <S.WhatsAppIcon src="/assets/imageWhatsApp/wpp.gif" alt="WhatsApp" />
      </Link>
    </S.WhatsAppContainer>
  );
};

export default WhatsApp;

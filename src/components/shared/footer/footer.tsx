"use client";

import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      {/* Seção superior com horários e botão WhatsApp */}

      {/* Seção inferior com informações, links e redes sociais */}
      <S.BottomSection>
        {/* Informações principais */}
        <S.BrandContainer>
          <S.Logo src="/assets/logoHome/barber-shop.png" alt="Original Club Logo" />
        </S.BrandContainer>

        {/* Contato */}
        <S.ContactSection>
          <h3>Contato</h3>
          <p>📞 (99) 9 9999-9999</p>
          <p>✉️ barbershop@gmail.com</p>
          <p>📍 Av. Principal, Bairro Central, Nº 456</p>
        </S.ContactSection>

        {/* Links institucionais */}
        <S.LinksSection>
          <h3>Institucional</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">Sobre Nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#barbers">Endereço</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </S.LinksSection>

        {/* Redes sociais */}
        <S.SocialSection>
          <h3>Onde nos encontrar</h3>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <S.SocialIcon src="/assets/imageFooter/facebook.png" alt="Facebook" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <S.SocialIcon src="/assets/imageFooter/youtube.png" alt="TikTok" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <S.SocialIcon src="/assets/imageFooter/instagram.png" alt="Instagram" />
            </a>
          </div>
        </S.SocialSection>
      </S.BottomSection>

      {/* Rodapé com direitos autorais */}
      <S.CopyRight>
        <p>Barbearia - Copyright© - Todos os Direitos Reservados.</p>
        <a href="#privacy-policy">Políticas de Privacidade</a>
      </S.CopyRight>
    </S.Footer>
  );
};

export default Footer;

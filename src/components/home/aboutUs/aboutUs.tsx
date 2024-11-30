"use client";

import * as S from "./styles";

const AboutUs: React.FC = () => {
  return (
    <S.Container>
      <S.Header>Sobre nós</S.Header>
      <S.AboutImage src="/assets/imageAboutUs/about3.png" alt="About Us Image" />
      <S.Title>Barbearia desde 2024</S.Title>
      <S.Content>
        <S.ImageContainer>
          <S.Image src="/assets/imageAboutUs/about1.jpg" alt="Barber Shop" />
          <S.Image src="/assets/imageAboutUs/about2.jpg" alt="Barber Profile" />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Subtitle>Vamos mudar seu visual!</S.Subtitle>
          <S.Description>
          Barbeiro é uma pessoa cuja ocupação é principalmente cortar e vestir estilo noivo
            e raspar o cabelo de homens e meninos. O local de trabalho de um barbeiro é conhecido como
            "barbearia" ou "barbeiro". As barbearias também são locais de convívio
            interação e discurso público. Em alguns casos, as barbearias também são
            fóruns públicos.
          </S.Description>
          <S.ExperienceContainer>
            <S.ExperienceItem>
              <S.ExperienceNumber>22</S.ExperienceNumber>
              <S.ExperienceLabel>Years Of Experience</S.ExperienceLabel>
            </S.ExperienceItem>
            <S.ExperienceItem>
              <S.ExperienceNumber>26</S.ExperienceNumber>
              <S.ExperienceLabel>Our Awesome Expert</S.ExperienceLabel>
            </S.ExperienceItem>
          </S.ExperienceContainer>
        </S.TextContainer>
      </S.Content>
    </S.Container>
  );
};

export default AboutUs;

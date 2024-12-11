"use client";

import * as S from "./styles";
import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, ScissorsIcon } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    icon: <Scissors size={36} />,
    name: "Corte de Cabelo",
    description: "Estilos modernos e clássicos para todos os gostos",
    details: "Nossos barbeiros altamente qualificados oferecem uma ampla gama de cortes, desde os clássicos atemporais até os estilos mais modernos e ousados. Utilizamos técnicas de corte avançadas e produtos de primeira linha para garantir que você saia com um visual impecável e que reflita sua personalidade."
  },
  {
    icon: <Beard size={36} />,
    name: "Barba",
    description: "Cuidados e estilos personalizados para sua barba",
    details: "Entendemos que sua barba é uma extensão da sua personalidade. Nossos especialistas em barba oferecem aparos precisos, designs personalizados e tratamentos revitalizantes. Seja para uma barba cheia e robusta ou um visual mais refinado, temos as habilidades e os produtos certos para realçar sua masculinidade."
  },
  {
    icon: <Spray size={36} />,
    name: "Tratamentos",
    description: "Cuidados especiais para cabelo e couro cabeludo",
    details: "Vá além do corte com nossos tratamentos especializados. Oferecemos uma variedade de opções, incluindo hidratações profundas, tratamentos anti-queda, e terapias para o couro cabeludo. Nosso objetivo é não apenas melhorar a aparência do seu cabelo, mas também promover sua saúde e vitalidade a longo prazo."
  },
];

const AboutUs: React.FC = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>Sobre a Barbearia</S.Header>
        <S.Content>
          <S.ImageContainer>
            <S.Image
              src="/assets/imageAboutUs/about.jpg"
              alt="Interior da Barbearia Vintage"
            />
          </S.ImageContainer>
          <S.TextContainer>
            <S.Subtitle>Tradição e Estilo desde 2024</S.Subtitle>
            <S.Description>
              Na Barbearia, acreditamos que um corte de cabelo é mais do que apenas aparência - é uma expressão de quem você é. Fundada em 2024, nossa barbearia combina técnicas tradicionais com tendências modernas para oferecer uma experiência única de cuidados masculinos.
            </S.Description>
            <S.Description>
              Nosso espaço foi cuidadosamente projetado para ser um refúgio da agitação do dia a dia. Aqui, você pode relaxar, desfrutar de uma bebida e conversar enquanto nossos mestres barbeiros cuidam do seu visual com precisão e atenção aos detalhes.
            </S.Description>
            <S.TraditionContainer>
              <S.IconContainer>
                <ScissorsIcon size={24} />
              </S.IconContainer>
              <S.TraditionText>Tradição em cada corte</S.TraditionText>
            </S.TraditionContainer>
          </S.TextContainer>
        </S.Content>
        <S.ServicesContainer>
          {services.map((service, index) => (
            <S.ServiceItem key={index}>
              <S.ServiceIcon>{service.icon}</S.ServiceIcon>
              <S.ServiceName>{service.name}</S.ServiceName>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
              <S.ServiceDetails>{service.details}</S.ServiceDetails>
            </S.ServiceItem>
          ))}
        </S.ServicesContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default AboutUs;


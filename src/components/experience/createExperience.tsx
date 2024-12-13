"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "./styles";

const CreateExperience: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <S.Container>
      <S.Heading>Experimente o Extraordinário</S.Heading>
      <S.Section ref={setRef(0)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/introducao.jpg"
            alt="Barbershop storefront with motorcycle"
            width={700}
            height={510}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Tradição & Estilo</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Bem-vindo à nossa barbearia tradicional, onde a excelência encontra o estilo atemporal. Aqui, cada corte é uma obra-prima, cada visita é uma experiência inesquecível.
          </S.Text>
          <S.Button>Agende Agora</S.Button>
        </S.TextContent>
      </S.Section>

      <S.Section ref={setRef(1)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/cafe.jpg"
            alt="Coffee station"
            width={650}
            height={500}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Café & Conversa</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Saboreie um café premium enquanto aguarda sua transformação. Nossa estação de café gourmet oferece uma seleção de blends exclusivos para elevar sua experiência.
          </S.Text>
          <S.Button>Conheça Nosso Menu</S.Button>
        </S.TextContent>
      </S.Section>

      <S.Section ref={setRef(2)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/game.jpg"
            alt="Gaming setup"
            width={650}
            height={500}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Diversão Garantida</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Entretenimento exclusivo para tornar sua experiência única. De jogos clássicos a consoles modernos, temos opções para todos os gostos. Desafie seus amigos ou relaxe com um jogo solo.
          </S.Text>
          <S.Button>Explore Nossos Jogos</S.Button>
        </S.TextContent>
      </S.Section>

      <S.Section ref={setRef(3)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/conforto.jpg"
            alt="Comfortable setting"
            width={800}
            height={500}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Conforto Supremo</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Ambiente sofisticado projetado para seu máximo conforto. Nossas poltronas ergonômicas e ambiente climatizado garantem uma experiência relaxante do início ao fim.
          </S.Text>
          <S.Button>Conheça Nosso Espaço</S.Button>
        </S.TextContent>
      </S.Section>

      <S.Section ref={setRef(4)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/musica.jpg"
            alt="Music system"
            width={650}
            height={500}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Trilha Sonora Perfeita</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Trilha sonora cuidadosamente selecionada para sua experiência. Do jazz suave ao rock clássico, nossa playlist cria a atmosfera perfeita para seu momento de cuidado pessoal.
          </S.Text>
          <S.Button>Ouça Nossa Playlist</S.Button>
        </S.TextContent>
      </S.Section>

      <S.Section ref={setRef(5)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/ler.jpg"
            alt="Reading material"
            width={900}
            height={500}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Leitura & Relaxamento</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Momentos de leitura e relaxamento em nossa área exclusiva. Explore nossa coleção de revistas e livros cuidadosamente selecionados enquanto espera pelo seu atendimento.
          </S.Text>
          <S.Button>Descubra Nossa Biblioteca</S.Button>
        </S.TextContent>
      </S.Section>

      <S.Section ref={setRef(6)}>
        <S.ImageWrapper>
          <Image
            src="/assets/experienceImage/amigos.jpg"
            alt="Social area with pool table"
            width={800}
            height={500}
            className="rounded-none object-cover w-full h-[600px]"
          />
          <S.ImageOverlay>Conexões & Memórias</S.ImageOverlay>
        </S.ImageWrapper>
        <S.TextContent>
          <S.Text>
            Um espaço para conexões autênticas e momentos memoráveis. Nossa área social com mesa de sinuca é o lugar perfeito para relaxar, socializar e criar novas amizades.
          </S.Text>
          <S.Button>Junte-se à Comunidade</S.Button>
        </S.TextContent>
      </S.Section>
    </S.Container>
  );
};

export default CreateExperience;


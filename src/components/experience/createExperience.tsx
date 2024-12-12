"use client";
import React from "react";
import Image from "next/image";
import * as S from "./styles";

const CreateExperience: React.FC = () => {
  return (
    <S.Container>
      <S.Section>
        <Image
          src="/assets/experienceImage/introducao.jpg"
          alt="Barbershop storefront with motorcycle"
          width={600}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Bem-vindo à nossa barbearia tradicional, onde o estilo clássico encontra o conforto moderno
        </S.Text>
      </S.Section>

      <S.Section>
        <Image
          src="/assets/experienceImage/cafe.jpg"
          alt="Coffee station"
          width={450}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Desfrute de café premium, água fresca e snacks enquanto espera pelo seu atendimento
        </S.Text>
      </S.Section>

      <S.Section>
        <Image
          src="/assets/experienceImage/game.jpg"
          alt="Gaming setup"
          width={600}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Divirta-se com nossos jogos e entretenimento durante sua visita
        </S.Text>
      </S.Section>

      <S.Section>
        <Image
          src="/assets/experienceImage/conforto.jpg"
          alt="Comfortable setting"
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Ambiente aconchegante e relaxante para sua melhor experiência
        </S.Text>
      </S.Section>

      <S.Section>
        <Image
          src="/assets/experienceImage/musica.jpg"
          alt="Music system"
          width={600}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Música ambiente selecionada para criar a atmosfera perfeita
        </S.Text>
      </S.Section>

      <S.Section>
        <Image
          src="/assets/experienceImage/ler.jpg"
          alt="Reading material"
          width={1000}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Área de leitura com revistas e jornais atualizados para seu entretenimento
        </S.Text>
      </S.Section>

      <S.Section>
        <Image
          src="/assets/experienceImage/amigos.jpg"
          alt="Social area with pool table"
          width={900}
          height={600}
          className="rounded-lg object-cover"
        />
        <S.Text>
          Faça novas amizades em nosso espaço de convivência com mesa de sinuca
        </S.Text>
      </S.Section>
    </S.Container>
  );
};

export default CreateExperience;


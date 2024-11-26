"use client";
import Link from 'next/link';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <S.LogoImage src="/barber-logo7.png" alt="Fio & Navalha Barbearia" />
      </S.LogoContainer>
      <S.Nav>
        <S.NavList>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/unidades">Serviços</Link></li>
          <li><Link href="/servicos">Localização</Link></li>
          <li><Link href="/loja">Loja</Link></li>
          <li><Link href="/agendar">Blog</Link></li>
          <li><Link href="/curso-barbearia">Curso de Barbearia</Link></li>
          <li><Link href="/clube-assinatura">Clube de Assinatura</Link></li>
          <li><Link href="/blog">Contato</Link></li>
          <li><S.BookButton as={Link} href="/contato">Agendar Horário</S.BookButton></li>
        </S.NavList>
      </S.Nav>
    </S.Header>
  );
};

export default Header;

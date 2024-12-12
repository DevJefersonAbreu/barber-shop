"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as S from './styles';
import { Menu, X, Scissors, Coffee, Camera, Gift, Phone, ShoppingBag, ChevronDown, User, Calendar, Info, Home, MapPin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (activeDropdown && !(e.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [activeDropdown]);

  return (
    <S.Header $isScrolled={isScrolled}>
      <S.HeaderContent>
        <S.Nav $isOpen={isMobileMenuOpen}>
          <S.NavList>
            <S.NavItem>
              <S.DropdownButton className="dropdown-container" onClick={() => toggleDropdown('home')}>
                <Home size={25} />
                <span>Home</span>
                <ChevronDown size={25} />
              </S.DropdownButton>
              <S.DropdownMenu $isOpen={activeDropdown === 'home'}>
                <S.DropdownItem>
                  <S.DropdownLink href="/sobre">
                    <Info size={25} />
                    <span>Sobre Nós</span>
                  </S.DropdownLink>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.DropdownLink href="/servicos">
                    <Scissors size={25} />
                    <span>Serviços</span>
                  </S.DropdownLink>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.DropdownLink href="/endereco">
                    <MapPin size={25} />
                    <span>Endereço</span>
                  </S.DropdownLink>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.DropdownLink href="/contato">
                    <Mail size={25} />
                    <span>Contato</span>
                  </S.DropdownLink>
                </S.DropdownItem>
              </S.DropdownMenu>
            </S.NavItem>
            <S.DropdownItem>
                  <S.DropdownLink href="/perfil">
                    <User size={25} />
                    <span>Perfil</span>
                  </S.DropdownLink>
                </S.DropdownItem>
            <S.NavItem>
              <S.NavLink href="/experiencia">
                <Coffee size={25} />
                <span>Experiência</span>
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="/galeria">
                <Camera size={25} />
                <span>Galeria</span>
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="/loja">
                <ShoppingBag size={25} />
                <span>Loja</span>
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.DropdownButton className="dropdown-container" onClick={() => toggleDropdown('more')}>
                <span>Mais</span>
                <ChevronDown size={25} />
              </S.DropdownButton>
              <S.DropdownMenu $isOpen={activeDropdown === 'more'}>
                <S.DropdownItem>
                  <S.DropdownLink href="/gift-card">
                    <Gift size={25} />
                    <span>Cartão Presente</span>
                  </S.DropdownLink>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.DropdownLink href="/perfil">
                    <User size={25} />
                    <span>Seja um Associado</span>
                  </S.DropdownLink>
                </S.DropdownItem>
                <S.DropdownItem>
                  <S.DropdownLink href="/agendamentos">
                    <Calendar size={25} />
                    <span>Meus Agendamentos</span>
                  </S.DropdownLink>
                </S.DropdownItem>
              </S.DropdownMenu>
            </S.NavItem>
          </S.NavList>
        </S.Nav>

        <S.ActionContainer>
          <S.BookButton href="/agendar">Agendar Horário</S.BookButton>
          <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </S.MobileMenuButton>
        </S.ActionContainer>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;


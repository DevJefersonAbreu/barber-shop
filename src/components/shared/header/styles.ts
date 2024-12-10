import styled, { css, keyframes } from 'styled-components';
import Link from 'next/link';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const Header = styled.header<{ $isScrolled: boolean }>`
  background: ${props => props.$isScrolled 
    ? '#1a1a1a' 
    : '#1a1a1a'};
    color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: ${props => props.$isScrolled ? '0.5rem 0' : '1rem 0'};
  box-shadow: ${props => props.$isScrolled 
    ? '0 4px 30px rgba(212, 168, 85, 0.1)' 
    : 'none'};
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 300px;
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%);
    backdrop-filter: blur(20px);
    transition: right 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

const navLinkStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 0.5rem;
  border-radius: 8px;

  &:hover, &:focus {
    color: #d4a855;
    background-color: rgba(212, 168, 85, 0.1);
    transform: translateY(-2px);
    outline: none;
  }

  &:active {
    transform: translateY(0);
  }

  span {
    @media (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: inline;
    }
  }
`;

export const NavLink = styled(Link)`
  ${navLinkStyles}
`;

export const DropdownButton = styled.button`
  ${navLinkStyles}
  background: none;
  border: none;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(20, 20, 20, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 1rem;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  min-width: 220px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(212, 168, 85, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgba(20, 20, 20, 0.98);
  }

  @media (max-width: 768px) {
    position: static;
    background: none;
    box-shadow: none;
    padding: 0;
    display: block;
    animation: none;
    transform: none;

    &::before {
      display: none;
    }
  }
`;

export const DropdownItem = styled.li`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DropdownLink = styled(Link)`
  ${navLinkStyles}
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover, &:focus {
    background-color: rgba(212, 168, 85, 0.15);
    transform: translateX(5px);
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ContactButton = styled.a`
  ${navLinkStyles}
`;

export const BookButton = styled.a`
  background: linear-gradient(135deg, #d4a855 0%, #b38d3d 100%);
  color: #1a1a1a;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 15px rgba(212, 168, 85, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(270deg, #d4a855, #b38d3d, #d4a855);
    background-size: 400% 400%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    animation: ${shimmer} 6s ease-in-out infinite;
    border-radius: 50px;
    z-index: -1;
  }

  &:hover, &:focus {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(212, 168, 85, 0.4);
    color: #1a1a1a;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(212, 168, 85, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover, &:focus {
    color: #d4a855;
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;


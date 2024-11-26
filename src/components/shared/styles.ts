import styled from 'styled-components';

export const Header = styled.header`
  background-color: #0000002a;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 280px;
  height: 90px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  li {
    margin-left: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffeb3b;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    li {
      margin: 10px 0;
    }
  }
`;

export const BookButton = styled.a`
  background-color: #0000002a;
  color: #ffffff;
  padding: 0.4rem 0.5rem;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  box-shadow: 3px 3px 5px #020202b6, -3px -3px 5px #0505056c, 0px 6px 8px rgba(0, 0, 0, 0.555);

  &:hover {
    background-color: #0707079c;
    transform: translateY(-2px);
    box-shadow: 4px 4px 7px #1a1a1a, -4px -4px 7px #333333, 0px 8px 10px rgba(0, 0, 0, 0.35);
  }
`;

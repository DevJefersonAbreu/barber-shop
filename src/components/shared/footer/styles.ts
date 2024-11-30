import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 5px solid #d4a855;
`;


export const WorkingHours = styled.div`
  flex: 1;
  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export const WhatsAppButton = styled.a`
  display: inline-block;
  background-color: #d4a855;
  color: #000;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 8px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3rem;
  flex-wrap: wrap;
  background-color: #000;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const BrandContainer = styled.div`
  flex: 1;
  text-align: center;
  p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    margin-left: -3.8rem;
  }
`;

export const Logo = styled.img`
  max-width: 350px;
  margin-top: -17px;
`;

export const ContactSection = styled.div`
  flex: 1;
  h3 {
    font-size: 1.2rem;
    color: #d4a855;
    margin-bottom: 1rem;
  }
  p {
    margin: 0.3rem 0;
  }
`;

export const LinksSection = styled.div`
  flex: 1;
  h3 {
    font-size: 1.2rem;
    color: #d4a855;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 0.5rem;
      a {
        color: #d4a855;
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const SocialSection = styled.div`
  flex: 1;
  h3 {
    font-size: 1.2rem;
    color: #d4a855;
    margin-bottom: 1rem;
  }
`;

export const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 2rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  background-color: #d4a855;

  p {
    color: #322F2A;
    font-weight: 600;
  }

  a {
    font-weight: 700;
    color:  #3D3D3D;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;

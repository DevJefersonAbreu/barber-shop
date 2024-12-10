import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  background-color: #f8f9fa;
  color: #333;
  padding: 6rem 1rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 10rem 4rem;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-110%);
    width: 250px;
    height: 3px;
    background-color: #d4a855;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    height: 500px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Subtitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #5a6a7a;
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

export const ServiceItem = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #d4a855;
  margin-bottom: 1rem;
`;

export const ServiceName = styled.h4`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #5a6a7a;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const ServiceDetails = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  color: #7a8a9a;
  line-height: 1.6;
`;

const rotate = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 10px 0; }
`;


export const IconContainer = styled.div`
  color: #d4a855;
  margin-right: 1rem;
`;

export const TraditionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-top: -2rem;
  margin-left: -.7rem;
`;

export const TraditionText = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
`;


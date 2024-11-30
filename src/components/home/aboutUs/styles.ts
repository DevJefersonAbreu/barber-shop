import styled from "styled-components";

export const Container = styled.section`
  background-color: #fff;
  color: #fff;
  padding-top: 8rem;
  text-align: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const Header = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 10px;
`;

export const AboutImage = styled.img`
  width: 170px; 
  height: 22px; 
  object-fit: cover; 
  margin: 20px auto; 
  display: block;
  margin-top: -8px;
`;

export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #3D3D3D;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const Image = styled.img`
  width: 300px; 
  height: 400px; 
  object-fit: cover; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: #d4a855 3px solid;
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: 10%;
`;

export const Subtitle = styled.h4`
  font-family: "Quicksand", sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

export const Description = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #322F2A;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ExperienceItem = styled.div`
  text-align: center;
`;

export const ExperienceNumber = styled.span`
  font-family: "Quicksand", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color:#d4a855;
`;

export const ExperienceLabel = styled.span`
  display: block;
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  margin-top: 5px;
  color: #322F2A;
`;

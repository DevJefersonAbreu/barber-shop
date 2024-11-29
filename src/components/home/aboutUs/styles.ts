import styled from "styled-components";

export const Container = styled.section`
  background-color: #000;
  color: #fff;
  padding-top: 5rem;
  text-align: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const Header = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 10px;
`;

export const AboutImage = styled.img`
  width: 110px; 
  height: 12px; 
  object-fit: cover; 
  margin: 20px auto; 
  display: block;
  margin-top: -8px;
`;

export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #808080;
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
  width: 250px; 
  height: 300px; 
  object-fit: cover; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: #d4a855 3px solid;
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

export const Subtitle = styled.h4`
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #f6f2dc;
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
`;

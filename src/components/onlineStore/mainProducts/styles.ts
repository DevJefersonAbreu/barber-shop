import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 10rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
`;

export const Brand = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin: 0.5rem 0 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0 0;
`;

export const MainFeature = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeatureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureText = styled.div`
  text-align: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;


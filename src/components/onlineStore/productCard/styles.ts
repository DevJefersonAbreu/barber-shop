import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color:#f8f9fa;
  padding-top: 2rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 16px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
`;

export const BuyButton = styled.button`
  background: #d4a855;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #c49745;
  }
`;


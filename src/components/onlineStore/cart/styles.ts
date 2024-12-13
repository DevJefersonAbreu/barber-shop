import styled from 'styled-components';

// Cart Styles
export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 270px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    max-width: 400px;
    transform: translateY(calc(100% - 60px));

    &:hover, &:focus-within {
      transform: translateY(0);
    }
  }
`;

export const CartHandle = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 50px;
    height: 5px;
    background-color: #ccc;
    border-radius: 3px;
    margin: 0 auto 10px;
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f0f0f0;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-left: 12px;
  font-weight: 600;
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ItemName = styled.span`
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`;

export const ItemDescription = styled.span`
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export const ItemPrice = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ff4d4d;
  border: none;
  padding: 6px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(255, 77, 77, 0.1);
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 2px solid #f0f0f0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #d4a855;
  color: white;
  border: none;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color:rgb(160, 119, 43);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// MainProducts and Product List Styles
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 15px;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4CAF50;
`;

export const BuyButton = styled.button`
  background-color: #d4a855;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const CancelButton = styled(BuyButton)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #ff3333;
  }
`;

// MainProducts Specific Styles
export const Header = styled.header`
  margin-bottom: 30px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

export const Brand = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4CAF50;
`;

export const MainFeature = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

export const FeatureOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const FeatureText = styled.div`
  color: white;
`;

export const Subtitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;


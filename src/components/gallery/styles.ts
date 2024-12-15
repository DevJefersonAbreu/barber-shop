import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0a0a0a;
  color: #ffffff;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
  background-size: 100px 100px;
  padding: 4rem 2rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #d4a855;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: bold;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(30, 30, 30, 0.8);
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

export const GalleryText = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0;
`;

export const CenteredContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;


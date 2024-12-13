import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  margin-top: 8rem;
  background-color: #0a0a0a;
  color: #ffffff;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
  background-size: 100px 100px;
`

export const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Playfair Display', serif;
  color: #C5A572;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  margin-bottom: 8rem;
  position: relative;
  opacity: 0;

  &.animate-fade-in {
    animation: ${fadeIn} 1s ease-out forwards;
  }

  &:nth-child(even) {
    direction: rtl;
    
    div {
      direction: ltr;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }

  &:last-child::after {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  &:hover img {
    transform: scale(1.05);
  }

  img {
    transition: transform 0.3s ease-in-out;
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #C5A572;
  padding: 1rem;
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  text-align: center;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Text = styled.p`
  font-size: 1.8rem;
  color: #ffffff;
  line-height: 1.6;
  font-family: 'Playfair Display', serif;
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 3px;
    height: 2rem;
    background-color: #C5A572;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`

export const Button = styled.button`
  background-color: #C5A572;
  color: #0a0a0a;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: 'Playfair Display', serif;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #0a0a0a;
    color: #C5A572;
    box-shadow: 0 0 0 2px #C5A572;
  }
`


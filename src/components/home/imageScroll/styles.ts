import styled, { keyframes } from "styled-components";

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 40px; 
  left: 50%; 
  transform: translateX(-50%);
  z-index: 1000;
`;

export const ScrollImage = styled.img`
  width: 80px; 
  height: auto;
  animation: ${moveUpDown} 2s ease-in-out infinite; 
`;

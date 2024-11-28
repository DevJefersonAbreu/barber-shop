import styled, { keyframes } from "styled-components";

// Animação para o movimento de cima para baixo
const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0); /* Posição inicial e final */
  }
  50% {
    transform: translateY(-10px); /* Move para cima */
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 20px; /* Posicionado na parte inferior */
  left: 50%; /* Centralizado horizontalmente */
  transform: translateX(-50%); /* Ajuste para centralização exata */
  z-index: 1000;
`;

export const ScrollImage = styled.img`
  width: 80px; /* Ajuste o tamanho conforme necessário */
  height: auto;
  animation: ${moveUpDown} 2s ease-in-out infinite; /* Animação suave e infinita */
`;

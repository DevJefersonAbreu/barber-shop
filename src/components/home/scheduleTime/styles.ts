import styled from "styled-components";

export const ScheduleContainer = styled.div`
  position: fixed; 
  bottom: 20px; 
  left: 30px;
  z-index: 1000; 
`;

export const ScheduleImage = styled.img`
  width: 110px; /* Tamanho da imagem */
  height: 110px; /* Mantendo a proporção */
  cursor: pointer; /* Adiciona o cursor de clique */
  transition: transform 0.3s ease-in-out; 
 
  &:hover {
    transform: scale(1.2); 
  }
`;

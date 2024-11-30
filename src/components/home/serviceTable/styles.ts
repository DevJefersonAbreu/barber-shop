import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh; /* Preenche a página inteira */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: relative; 
  border-bottom: #d4a855  5px solid;
`;

export const Image = styled.img`
  margin-top: 3.5rem;
  max-width: 100%;
  max-height: 75%;
  object-fit: contain; /* Garante proporção da imagem */
  border: 2px solid #d4a855; /* Adiciona borda dourada */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para destaque */
`;

export const ScheduleImage = styled.img`
  position: absolute; /* Para posicionamento no canto inferior esquerdo */
  bottom: 55px; /* Ajuste a distância da parte inferior */
  left: 50px; /* Ajuste a distância do lado esquerdo */
  width: 300px; /* Tamanho da imagem */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 20px;
  cursor: pointer; /* Adiciona um cursor ao passar sobre a imagem */
  transition: transform 0.3s ease-in-out; /* Animação ao passar o mouse */

  &:hover {
    transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
  }
`;

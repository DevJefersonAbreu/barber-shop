import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh; /* Preenche a página inteira */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/imageServiceTable/service-table2.jpg"); /* Imagem de fundo */
  background-size: cover; /* Cobre toda a área */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição */
`;

export const Image = styled.img`
margin-top: 3.5rem;
  max-width: 100%;
  max-height: 75%;
  object-fit: contain; /* Garante proporção da imagem */
  border: 2px solid #d4a855; /* Adiciona borda dourada */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para destaque */
`;

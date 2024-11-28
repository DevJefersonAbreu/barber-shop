import styled from "styled-components";

export const WhatsAppContainer = styled.div`
  position: fixed;
  bottom: 40px; 
  right: 50px; 
  z-index: 1000; 
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.4); 
  }
`;

export const WhatsAppIcon = styled.img`
  width: 60px; 
  height: 60px;
 
`;

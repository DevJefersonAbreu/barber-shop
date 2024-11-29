import styled from "styled-components";

export const ScheduleContainer = styled.div`
  position: absolute; 
  bottom: 30px; 
  left: 3%;
  z-index: 1000; 
`;

export const ScheduleImage = styled.img`
  width: 130px; 
  height: 130px; 
  cursor: pointer; 
  transition: transform 0.3s ease-in-out; 
 
  &:hover {
    transform: scale(1.2); 
  }
`;

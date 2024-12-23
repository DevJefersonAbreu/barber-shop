import styled from 'styled-components'

export const OuterContainer = styled.div`
  position: relative;
  width:33%;
  height: auto;
  margin-top: 3rem;

  @media (max-width: 768px) {
    width: 22rem;
    margin-top: 2rem;
  }
`

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d4a855;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  position: relative;
  padding-top: 4rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    background-color: #000 ;
    border-radius: 25px 25px 0 0;
  }
  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 15px;

    &::before {
      height: 10vh;
      border-radius: 15px 15px 0 0;
    }
  }
`

export const TopTabs = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 20px;
    top: -15px;
  }
`

export const SideTab = styled.div`
  width: 90px;
  height: 30px;
  margin-bottom: 1rem;
  background-color: #d4a855;
  border-radius: 20px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  transform: rotate(90deg); 
  margin-left: 2rem;
  margin-right: 2rem;
  @media (max-width: 768px) {
    width: 60px;
    height: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;



export const Container = styled.div`
  width: 100%;
  height: 55vh;
  background-color: white;
  border-radius: 3%;
  padding: 24px;
  margin: 20px auto 0;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 500px;
    height: 55vh;
    margin-top: 60px;
    border-radius: 100%;
    padding: 26px;
  }
`

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`

export const MonthYear = styled.div`
  font-size: 27px;
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
  margin-top: 3rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 3rem;
  }
`

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 3rem;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 3rem;
  }
`

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 500;
  color: #666;
  padding: 0 8px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 12%;

  @media (max-width: 768px) {
    gap: 1px;
    padding: 1px;
    margin-bottom: 14%;
  }
`

export const Day = styled.button<{ isToday?: boolean; isSelected?: boolean }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isSelected ? '#86b7a0' : 'transparent'};
  color: ${props => props.isSelected ? 'white' : props.isToday ? '#d4a855' : '#333'};
  font-weight: ${props => props.isToday ? '500' : 'normal'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 22px;

  &:hover {
    background-color: ${props => props.isSelected ? '#86b7a0' : '#f0f0f0'};
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`;


export const FormContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #d4a855;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 90%;

  @media (max-width: 768px) {
    width: 95%;
    padding: 16px;
  }
`;

export const FormHeader = styled.h3`
  text-align: center;
  font-size: 30px;
  margin-bottom: 16px;
  color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;

`;

export const DisabledInput = styled(Input)`
  background-color: #f0f0f0;
  color: #999;
  cursor: not-allowed;
`;

export const Select = styled.select`
  width: 580px;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #75a593;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const CancelButton = styled.button`
  width: 48%;
  padding: 12px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;

import styled, { keyframes, css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap');

  body {
    font-family: "Lato", sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 100px rgba(212, 168, 85, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 168, 85, 0.2);
  animation: ${fadeIn} 0.6s ease-out;
  margin-top: 9rem;
`;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 168, 85, 0.5);
  letter-spacing: 2px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const inputStyles = css`
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(212, 168, 85, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Select = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;

  option {
    background-color: #1e1e1e;
    color: #fff;
  }

  option:disabled {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const ServiceSelection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
`;

export const ServiceOption = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #d4a855;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #d4a855;
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #1e1e1e;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ServiceLabel = styled.label`
  color: #fff;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #1e1e1e;
  background: linear-gradient(45deg, #d4a855, #e6c989);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(45deg, #e6c989, #d4a855);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
`;

export const Td = styled.td`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const TableRow = styled.tr`
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    ${Td} {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #1e1e1e;
  background-color: #d4a855;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c09645;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const DateNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NavButton = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #1e1e1e;
  background: linear-gradient(45deg, #d4a855, #e6c989);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(45deg, #e6c989, #d4a855);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const DateDisplay = styled.div`
  padding: 0.8rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  min-width: 150px;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 12px;
`;

export const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #d4a855;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid #d4a855;

  &:hover {
    background: rgba(212, 168, 85, 0.1);
  }

  &:active {
    transform: translateY(1px);
  }
`;


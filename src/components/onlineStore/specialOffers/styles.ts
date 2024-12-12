import styled, { keyframes } from 'styled-components';

const scrollText = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8; 
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding-top: 2rem;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 64%;
  overflow: hidden;
`;

export const ScrollingText = styled.div`
  white-space: nowrap;
  width: fit-content;
  display: flex;
`;

export const TextContent = styled.div`
  display: inline-block;
  animation: ${scrollText} 60s linear infinite; // Changed from 40s to 60s
  color: #000;
  font-size: 3.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Sparkle = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  background-color: #d4a855;
  transform: rotate(45deg);
  margin: 0 1rem;
  position: relative;
  animation: ${sparkle} 4s ease-in-out infinite; // Changed from 3s to 4s

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #d4a855;
  }

  &::before {
    width: 100%;
    height: 2px;
    top: 3px;
    left: 0;
  }

  &::after {
    width: 2px;
    height: 100%;
    left: 3px;
    top: 0;
  }
`;


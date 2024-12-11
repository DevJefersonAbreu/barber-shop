import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f9f9f9;
  width: 100%;
  height: 100vh;
`;

export const TextSection = styled.div`
  width: 40%;
  padding: 1rem;
  margin-top: 2%;

  h2 {
    font-size: 3rem;
    color: #d4a855;
  }

  p {
    font-size: 1.6rem;
    color: #666;
    margin-top: -0.1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 1.3rem;
      color: #555;
      margin: 0.5rem 0;
    }
  }
`;

export const TopSection = styled.div`
  display: contents;
  width: 100%;
  padding: 2rem;
  background-color: #f5f5f5;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const WorkingHours = styled.div`
  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export const WhatsAppButton = styled.a`
  display: inline-block;
  background-color: #d4a855;
  color: #000;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #fff;
  }
`;

export const MapContainer = styled.div`
  flex: 1;

  iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 8px;
  }
`;

export const MapSection = styled.div`
  width: 50%;
  height: 50%;
  border: 2px solid #d4a855;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 9%;
  margin-top: 3%;

  .map {
    width: 100%;
    height: 100%;
  }
`;


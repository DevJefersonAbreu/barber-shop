import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  margin-top: 10rem;
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

export const Text = styled.p`
  font-size: 1.25rem;
  color: #333;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`


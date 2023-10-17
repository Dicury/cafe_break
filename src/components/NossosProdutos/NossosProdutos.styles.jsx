"use client";

import styled from "styled-components";

export const Titulo = styled.h4`
  padding: 1rem 0 1rem 2rem;
  color: ${(props) => props.theme.colors.darkBrown};

  @media (min-width: 600px) {
    padding: 2rem 0 0 3rem;
    font-size: 24px;
  }

  @media (min-width: 1000px) {
    font-size: 32px;
    padding-left: 10vw;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  grid-template-columns: auto auto;
  gap: 0.5rem;

  @media (min-width: 600px) {
    padding: 1rem;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
  }

  @media (min-width: 1000px) {
    padding: 2rem;
    gap: 1.5rem;
  }
`;

export const Teste = styled.div`
  flex-basis: 30%;
  @media (min-width: 1000px) {
    flex-basis: 20%;
    flex-shrink: 0;
  }
`;

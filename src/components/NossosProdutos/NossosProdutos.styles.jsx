"use client";

import styled from "styled-components";

export const Titulo = styled.h4`
  padding: 1rem 0 1rem 2rem;
  color: ${(props) => props.theme.colors.darkBrown};
`;
export const Container = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: auto auto;
  gap: 0.5rem;
`;

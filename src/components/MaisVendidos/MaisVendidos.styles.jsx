"use client";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: relative;

  @media (min-width: 600px) {
  }

  @media (min-width: 1000px) {
  }
`;
export const Texto = styled.h4`
  padding: 0 0 1rem 2rem;
  color: ${(props) => props.theme.colors.darkBrown};

  @media (min-width: 600px) {
    padding-left: 3rem;
    font-size: 24px;
  }

  @media (min-width: 1000px) {
    font-size: 32px;
    padding-left: 10vw;
    padding-bottom: 2rem;
  }
`;
export const ListaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 0;
  background-color: ${(props) => props.theme.colors.lightBrown};

  @media (min-width: 600px) {
    padding-left: 1rem;
  }

  @media (min-width: 1000px) {
    padding-left: 0;
    justify-content: center;
  }
`;

export const Scroll = styled.div`
  display: flex;
  gap: 0.5rem;

  overflow-x: scroll;
  padding-left: 2rem;
  overscroll-behavior-inline: contain;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1000px) {
    padding-left: 0;
    gap: 1.5rem;
  }
`;

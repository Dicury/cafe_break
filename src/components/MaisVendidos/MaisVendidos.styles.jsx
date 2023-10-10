"use client";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
`;
export const Texto = styled.h4`
  padding: 0 0 1rem 2rem;
  color: ${(props) => props.theme.colors.darkBrown};
`;
export const ListaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 0;
  background-color: ${(props) => props.theme.colors.lightBrown};
  width: auto;
  height: auto;
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
`;

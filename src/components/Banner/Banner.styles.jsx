"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  gap: 1rem;
`;
export const Titulo = styled.h3`
  color: ${(props) => props.theme.colors.darkBrown};
  font-weight: 600;
  font-size: 20px;
`;
export const TituloDestaque = styled.span`
  color: ${(props) => props.theme.colors.orange};
  font-weight: 600;
  font-size: 20px;
`;
export const Texto = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
export const Img = styled.img`
  align-self: center;
  width: 200px;
  height: 180px;
`;
export const Botao = styled.button`
  display: flex;
  align-self: center;
  background-color: ${(props) => props.theme.colors.darkBrown};
  color: ${(props) => props.theme.colors.white};
  border: none;
  width: 45vw;
  border-radius: 33px;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.orange};
  width: 22px;
  height: 22px;
  border-radius: 100px;
`;
export const ButtonIcon = styled.img`
  width: 15px;
`;

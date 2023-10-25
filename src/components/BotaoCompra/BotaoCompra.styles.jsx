"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const Fundo = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 250px;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
`;

export const Titulo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkBrown};
`;

export const Texto = styled.p`
  white-space: pre-line;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoAdicionar = styled(Link)`
  background-color: ${(props) => props.theme.colors.orange};
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
`;

export const BotaoCancelar = styled.button`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
`;

export const BotaoCompraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.orange};
  width: auto;
  height: auto;
  border-radius: 100px;
  padding: 0.5rem;
`;
export const BotaoCompraIcone = styled.img`
  width: 15px;

  @media (min-width: 1000px) {
    width: 25px;
  }
`;

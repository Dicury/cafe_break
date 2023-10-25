"use client";

import styled from "styled-components";
import BotaoCompra from "../BotaoCompra";

export const ContainerExterno = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(3, auto);
    padding: 3rem 3rem;
    gap: 0.5rem;
  }

  @media (min-width: 1000px) {
    padding: 2vw 10vw;
  }
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-column: 1/4;
    width: 40vw;

    margin-top: 5vh;
    font-size: 30px;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    margin-top: 5vh;
  }
`;

export const Titulo = styled.h3`
  color: ${(props) => props.theme.colors.darkBrown};
  font-weight: 600;
  font-size: 20px;

  @media (min-width: 600px) {
    font-size: 30px;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;
export const TituloDestaque = styled.span`
  color: ${(props) => props.theme.colors.orange};
  font-weight: 600;
  font-size: 20px;

  @media (min-width: 600px) {
    font-size: 30px;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;
export const Texto = styled.p`
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 600px) {
    grid-column: 1/4;

    font-size: 18px;
  }
`;
export const Img = styled.img`
  justify-self: center;
  width: 200px;
  height: 180px;

  @media (min-width: 600px) {
    grid-column: 4/5;
    grid-row: 1/4;

    width: 300px;
    height: 300px;
    align-self: center;
  }

  @media (min-width: 1000px) {
    width: 500px;
    height: 400px;
  }
`;
export const ContainerBotao = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-self: center;
  background-color: ${(props) => props.theme.colors.darkBrown};
  color: ${(props) => props.theme.colors.white};
  width: 210px;
  border-radius: 33px;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 600px) {
    grid-row: 2/3;
    margin: 1rem 0;
    justify-self: left;
  }

  @media (min-width: 1000px) {
    margin-bottom: 2rem;
  }
`;

export const TextoBotao = styled.p`
  color: ${(props) => props.theme.colors.white};
`;

export const BotaoCompraEstilizado = styled(BotaoCompra)`
  @media (min-width: 1000px) {
    width: 35px;
    > img {
      width: 20px;
    }
  }
`;

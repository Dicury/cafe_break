"use client";

import Link from "next/link";
import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 100px;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.background};

  @media (min-width: 600px) {
    grid-template-columns: auto auto 50px;
    padding: 2vw 10vw;
    align-items: center;
  }

  @media (min-width: 1000px) {
  }
`;

export const LogoLink = styled(Link)`
  grid-row: 1/3;
  grid-column: 1/5;
  justify-self: center;
  text-decoration: none;

  @media (min-width: 600px) {
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: left;
  }
`;

export const Logo = styled.img`
  width: 10rem;
  height: 2rem;
`;
export const CarrinhoBotao = styled(Link)`
  text-decoration: none;
  justify-self: center;
  grid-column: 4/5;
  grid-row: 1/3;
  height: 30px;
  width: 30px;
  border: none;
  background: none;

  @media (min-width: 600px) {
    grid-row: 1/3;
    grid-column: 3/4;
  }
`;
export const CarrinhoImg = styled.img``;
export const CarrinhoTamanho = styled.div`
  position: relative;
  text-align: center;
  bottom: 35px;
  left: 21px;
  height: 20px;
  width: 20px;
  z-index: 1000;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.orange};
`;

export const ContainerPaginas = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  gap: 1rem;
  margin-left: 10%;
  align-items: baseline;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.darkBrown};
  padding: 0.5rem 1rem;
  border-radius: 20px 20px 0 0;
  width: 80vw;

  @media (min-width: 600px) {
    background: none;
    position: relative;
    grid-row: 1/3;
    grid-column: 2/3;
    justify-self: right;
    margin-left: 0px;
    align-items: center;
    width: auto;
    border-radius: 0px;
    padding: 0px;
    gap: 1rem;
  }

  @media (min-width: 1000px) {
    gap: 2rem;
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
`;
export const Icone = styled.img`
  display: block;
  width: 50px;
  height: 50px;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const IconeUsuario = styled.img`
  display: block;
  width: 50px;
  height: 50px;

  @media (min-width: 600px) {
    width: 34px;
    height: 34px;
  }
`;

export const Texto = styled.p`
  display: none;
  @media (min-width: 600px) {
    display: block;
    color: ${(props) => props.theme.colors.orange};
    font-size: 16px;
    font-weight: 400;
  }
`;

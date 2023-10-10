"use client";

import Link from "next/link";
import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 100px;
  grid-template-rows: repeat(2, auto);
  align-items: center;
  width: 100vw;
  height: 76px;
  background-color: ${(props) => props.theme.colors.background};
`;
export const Logo = styled.img`
  grid-row: 1/3;
  grid-column: 1/5;
  justify-self: center;
  width: 10rem;
  height: 2rem;
`;
export const CarrinhoBotao = styled(Link)`
  text-decoration: none;
  justify-self: center;
  grid-column: 4/5;
  grid-row: 1/3;
  height: 32px;
  width: 32px;
  border: none;
  background: none;
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

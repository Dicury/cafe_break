"use client";

import React from "react";
import {
  CarrinhoBotao,
  CarrinhoImg,
  CarrinhoTamanho,
  HeaderDiv,
  Logo,
} from "@/components/Header/Header.styles";

function Header() {
  return (
    <HeaderDiv>
      <Logo src="/images/branding/logo-coffe.svg" alt="logo" />
      <CarrinhoBotao href="/carrinho">
        <CarrinhoImg
          src="/images/icons/shopping-cart.svg"
          alt="shopping cart"
        />
        <CarrinhoTamanho>2</CarrinhoTamanho>
      </CarrinhoBotao>
    </HeaderDiv>
  );
}

export default Header;

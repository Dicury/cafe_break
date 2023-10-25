"use client";

import React from "react";
import {
  CarrinhoBotao,
  CarrinhoImg,
  CarrinhoTamanho,
  HeaderDiv,
  Logo,
  LogoLink,
  ContainerPaginas,
  Icone,
  IconeUsuario,
  Links,
  Texto,
} from "@/components/Header/Header.styles";
import useCarrinhoContext from "@/hooks/useCarrinhoContext";

function Header() {
  const { carrinho, setCarrinho } = useCarrinhoContext();

  return (
    <>
      <HeaderDiv>
        <LogoLink href="/">
          <Logo src="/images/branding/logo-coffe.svg" alt="logo" />
        </LogoLink>

        <ContainerPaginas>
          <Links href="/">
            <Icone src="/images/icons/shop.svg" alt="aba de produtos" />
            <Texto>Produtos</Texto>
          </Links>
          <Links href="/sobreNos">
            <Icone src="/images/icons/book.svg" alt="aba sobre nós" />
            <Texto>Sobre nós</Texto>
          </Links>
          <Links href="/">
            <IconeUsuario src="/images/icons/user.svg" alt="aba usuário" />
          </Links>
          <Links href="https://github.com/Dicury">
            <Icone
              src="/images/icons/github-logo.svg"
              alt="página do github de Mateus Cury"
            />
          </Links>
        </ContainerPaginas>

        <CarrinhoBotao href="/carrinho">
          <CarrinhoImg
            src="/images/icons/shopping-cart.svg"
            alt="shopping cart"
          />
          <CarrinhoTamanho>{carrinho.length}</CarrinhoTamanho>
        </CarrinhoBotao>
      </HeaderDiv>
    </>
  );
}

export default Header;

"use client";

import React from "react";
import {
  BannerBotaoContainer,
  BannerBotaoIcone,
  Avaliacao,
  AvaliacaoContainer,
  AvaliacaoImg,
  Container,
  ContainerFundo,
  Img,
  Preco,
  PrecoContainer,
  Titulo,
} from "@/components/Produtos/Produtos.styles";

function Produtos() {
  return (
    <ContainerFundo>
      <Container>
        <AvaliacaoContainer>
          <Avaliacao>4.8</Avaliacao>
          <AvaliacaoImg src="/images/icons/star-icon.svg" />
        </AvaliacaoContainer>
        <Img src="/images/products/cha-matte.svg" />
        <Titulo>Chá Matte</Titulo>
        <PrecoContainer>
          <Preco>R$: 6,00</Preco>
          <BannerBotaoContainer>
            <BannerBotaoIcone src="/images/icons/shopping-cart-white.svg" />
          </BannerBotaoContainer>
        </PrecoContainer>
      </Container>
    </ContainerFundo>
  );
}

export default Produtos;

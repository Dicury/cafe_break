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

function Produtos({ avaliacao, nome, img, preco }) {
  return (
    <ContainerFundo>
      <Container>
        <AvaliacaoContainer>
          <Avaliacao>{avaliacao}</Avaliacao>
          <AvaliacaoImg src="/images/icons/star-icon.svg" />
        </AvaliacaoContainer>
        <Img src={img} />
        <Titulo>{nome}</Titulo>
        <PrecoContainer>
          <Preco>R$: {preco},00</Preco>
          <BannerBotaoContainer>
            <BannerBotaoIcone src="/images/icons/shopping-cart-white.svg" />
          </BannerBotaoContainer>
        </PrecoContainer>
      </Container>
    </ContainerFundo>
  );
}

export default Produtos;

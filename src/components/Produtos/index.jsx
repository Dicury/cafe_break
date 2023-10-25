"use client";

import React from "react";
import useCarrinhoContext from "@/hooks/useCarrinhoContext";
import Modal from "../BotaoCompra";
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
import BotaoCompra from "../BotaoCompra";

function Produtos({ avaliacao, nome, imagem, preco, id }) {
  return (
    <ContainerFundo>
      <Container>
        <AvaliacaoContainer>
          <Avaliacao>{avaliacao}</Avaliacao>
          <AvaliacaoImg src="/images/icons/star-icon.svg" />
        </AvaliacaoContainer>
        <Img src={imagem} />
        <Titulo>{nome}</Titulo>
        <PrecoContainer>
          <Preco>R$: {preco},00</Preco>
          <BotaoCompra
            nome={nome}
            id={id}
            imagem={imagem}
            preco={preco}
            key={id}
          />
        </PrecoContainer>
      </Container>
    </ContainerFundo>
  );
}

export default Produtos;

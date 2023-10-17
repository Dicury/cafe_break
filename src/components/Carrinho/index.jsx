"use client";
import React from "react";
import ProdutoCarrinho from "./ProdutoCarrinho";
import {
  ContainerExterno,
  Botao,
  BotaoContainer,
  InfosContainer,
  InfosContainerInterno,
  PrecoContainer,
  PrecoTexto,
  PrecoTextoTotal,
  Texto,
  TituloContainer,
  Voltar,
  ContainerLink,
  Icone,
} from "@/components/Carrinho/Carrinho.style";

function Carrinho() {
  return (
    <ContainerExterno>
      <TituloContainer>
        <Texto>Carrinho</Texto>
        <Texto>3 itens</Texto>
      </TituloContainer>

      <ProdutoCarrinho />
      <ProdutoCarrinho />
      <ProdutoCarrinho />

      <InfosContainer>
        <ContainerLink>
          <Icone src="/images/icons/arrow.svg" />
          <Voltar href="/">Continuar Comprando</Voltar>
        </ContainerLink>

        <InfosContainerInterno>
          <PrecoContainer>
            <PrecoTexto>Subtotal:</PrecoTexto>
            <PrecoTexto>R$ 64,00</PrecoTexto>
            <PrecoTexto>Frete:</PrecoTexto>
            <PrecoTexto>R$: 5,00</PrecoTexto>
            <PrecoTextoTotal>Total:</PrecoTextoTotal>
            <PrecoTextoTotal>R$: 69,00</PrecoTextoTotal>
          </PrecoContainer>
          <BotaoContainer>
            <Botao>Fazer pedido</Botao>
          </BotaoContainer>
        </InfosContainerInterno>
      </InfosContainer>
    </ContainerExterno>
  );
}

export default Carrinho;

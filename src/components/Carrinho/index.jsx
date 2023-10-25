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
import useCarrinhoContext from "@/hooks/useCarrinhoContext";

function Carrinho() {
  const { carrinho } = useCarrinhoContext();
  let precoProdutosTotal = 0;
  let frete = 5;

  const tamanhoCarrinho = carrinho.length;
  const listaPreco = carrinho.map((produto) => produto.preco);

  for (let i = 0; i < carrinho.length; i++) {
    precoProdutosTotal += listaPreco[i];
  }

  return (
    <ContainerExterno>
      <TituloContainer>
        <Texto>Carrinho</Texto>
        <Texto>{tamanhoCarrinho} itens</Texto>
      </TituloContainer>

      {tamanhoCarrinho > 0 &&
        carrinho.map((produto) => {
          return (
            <ProdutoCarrinho
              nome={produto.nome}
              preco={produto.preco}
              quantidade={produto.quantidade}
              imagem={produto.imagem}
              id={produto.id}
              key={produto.id}
            />
          );
        })}

      <InfosContainer>
        <ContainerLink>
          <Icone src="/images/icons/arrow.svg" />
          <Voltar href="/">Continuar Comprando</Voltar>
        </ContainerLink>

        <InfosContainerInterno>
          <PrecoContainer>
            <PrecoTexto>Subtotal:</PrecoTexto>
            <PrecoTexto>R$ {precoProdutosTotal},00</PrecoTexto>
            <PrecoTexto>Frete:</PrecoTexto>
            <PrecoTexto>R$: 5,00</PrecoTexto>
            <PrecoTextoTotal>Total:</PrecoTextoTotal>
            <PrecoTextoTotal>
              R$: {precoProdutosTotal + frete},00
            </PrecoTextoTotal>
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

"use client";
import React from "react";
import ProdutoCarrinho from "./ProdutoCarrinho";
import {
  CarrinhoBotao,
  CarrinhoBotaoContainer,
  CarrinhoInfosContainer,
  CarrinhoPrecoContainer,
  CarrinhoPrecoTexto,
  CarrinhoPrecoTextoTotal,
  CarrinhoTexto,
  CarrinhoTituloContainer,
} from "@/components/Carrinho/Carrinho.style";

function Carrinho() {
  return (
    <>
      <CarrinhoTituloContainer>
        <CarrinhoTexto>Carrinho</CarrinhoTexto>
        <CarrinhoTexto>3 itens</CarrinhoTexto>
      </CarrinhoTituloContainer>
      <ProdutoCarrinho />
      <ProdutoCarrinho />
      <ProdutoCarrinho />
      <CarrinhoInfosContainer>
        <CarrinhoPrecoContainer>
          <CarrinhoPrecoTexto>Subtotal:</CarrinhoPrecoTexto>
          <CarrinhoPrecoTexto>R$ 64,00</CarrinhoPrecoTexto>
          <CarrinhoPrecoTexto>Frete:</CarrinhoPrecoTexto>
          <CarrinhoPrecoTexto>R$: 5,00</CarrinhoPrecoTexto>
          <CarrinhoPrecoTextoTotal>Total:</CarrinhoPrecoTextoTotal>
          <CarrinhoPrecoTextoTotal>R$: 69,00</CarrinhoPrecoTextoTotal>
        </CarrinhoPrecoContainer>
        <CarrinhoBotaoContainer>
          <CarrinhoBotao>Fazer pedido</CarrinhoBotao>
        </CarrinhoBotaoContainer>
      </CarrinhoInfosContainer>
    </>
  );
}

export default Carrinho;

"use client";

import React from "react";
import {
  BannerButtonContainer,
  BannerButtonIcon,
  ProdutosAvaliacao,
  ProdutosAvaliacaoContainer,
  ProdutosAvaliacaoImg,
  ProdutosContainer,
  ProdutosContainerFundo,
  ProdutosImg,
  ProdutosPreco,
  ProdutosPrecoContainer,
  ProdutosTitulo,
} from "@/components/Produtos/Produtos.styles";

function Produtos() {
  return (
    <ProdutosContainerFundo>
      <ProdutosContainer>
        <ProdutosAvaliacaoContainer>
          <ProdutosAvaliacao>4.8</ProdutosAvaliacao>
          <ProdutosAvaliacaoImg src="/images/icons/star-icon.svg" />
        </ProdutosAvaliacaoContainer>
        <ProdutosImg src="/images/products/cha-matte.svg" />
        <ProdutosTitulo>Chá Matte</ProdutosTitulo>
        <ProdutosPrecoContainer>
          <ProdutosPreco>R$: 6,00</ProdutosPreco>
          <BannerButtonContainer>
            <BannerButtonIcon src="/images/icons/shopping-cart-white.svg" />
          </BannerButtonContainer>
        </ProdutosPrecoContainer>
      </ProdutosContainer>
    </ProdutosContainerFundo>
  );
}

export default Produtos;

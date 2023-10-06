"use client";
import React from "react";
import Produtos from "../Produtos";
import {
  NossosProdutosContainer,
  NossosProdutosTitulo,
} from "@/components/NossosProdutos/NossosProdutos.styles";

function NosssosProdutos() {
  return (
    <>
      <NossosProdutosTitulo>Nossos Produtos</NossosProdutosTitulo>
      <NossosProdutosContainer>
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
      </NossosProdutosContainer>
    </>
  );
}

export default NosssosProdutos;

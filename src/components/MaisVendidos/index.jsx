"use client";

import React from "react";
import Produtos from "../Produtos";
import ListaProdutos from "@/api/api";
import {
  Container,
  ListaContainer,
  Scroll,
  Texto,
} from "@/components/MaisVendidos/MaisVendidos.styles";
import compararNumeroLista from "@/utils/compararNumeroLista";

function MaisVendidos() {
  const OrganizaLista = ListaProdutos.produtos
    .map((produto) => produto.vendas)
    .sort((a, b) => b - a)
    .splice(0, 4);

  const maisVendidos = ListaProdutos.produtos.map((produto) => {
    if (compararNumeroLista(produto.vendas, OrganizaLista)) {
      return (
        <Produtos
          key={produto.id}
          avaliacao={produto.avaliacao}
          img={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
        />
      );
    }
  });
  return (
    <Container>
      <Texto>Os mais vendidos</Texto>
      <ListaContainer>
        <Scroll>{maisVendidos}</Scroll>
      </ListaContainer>
    </Container>
  );
}

export default MaisVendidos;

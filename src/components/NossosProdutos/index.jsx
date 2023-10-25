"use client";
import React from "react";
import Produtos from "../Produtos";
import {
  Container,
  Titulo,
  ContainerProduto,
} from "@/components/NossosProdutos/NossosProdutos.styles";
import ListaProdutos from "@/api/api";

function NosssosProdutos() {
  return (
    <>
      <Titulo>Cardápio Completo</Titulo>
      <Container>
        {ListaProdutos.map((produto) => {
          return (
            <ContainerProduto key={produto.id}>
              <Produtos
                avaliacao={produto.avaliacao}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
                id={produto.id}
              />
            </ContainerProduto>
          );
        })}
      </Container>
    </>
  );
}

export default NosssosProdutos;

"use client";
import React from "react";
import Produtos from "../Produtos";
import {
  Container,
  Titulo,
} from "@/components/NossosProdutos/NossosProdutos.styles";

function NosssosProdutos() {
  return (
    <>
      <Titulo>Nossos Produtos</Titulo>
      <Container>
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
      </Container>
    </>
  );
}

export default NosssosProdutos;

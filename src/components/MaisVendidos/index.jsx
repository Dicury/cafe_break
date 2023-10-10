"use client";

import React from "react";
import Produtos from "../Produtos";
import {
  Container,
  ListaContainer,
  Scroll,
  Texto,
} from "@/components/MaisVendidos/MaisVendidos.styles";

function MaisVendidos() {
  return (
    <Container>
      <Texto>Os mais vendidos</Texto>
      <ListaContainer>
        <Scroll>
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
        </Scroll>
      </ListaContainer>
    </Container>
  );
}

export default MaisVendidos;

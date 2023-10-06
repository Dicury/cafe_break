"use client";

import React from "react";
import Produtos from "../Produtos";
import {
  MaisVendidosContainer,
  MaisVendidosListaContainer,
  MaisVendidosScroll,
  MaisVendidosTexto,
} from "@/components/MaisVendidos/MaisVendidos.styles";

function MaisVendidos() {
  return (
    <MaisVendidosContainer>
      <MaisVendidosTexto>Os mais vendidos</MaisVendidosTexto>
      <MaisVendidosListaContainer>
        <MaisVendidosScroll>
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
        </MaisVendidosScroll>
      </MaisVendidosListaContainer>
    </MaisVendidosContainer>
  );
}

export default MaisVendidos;

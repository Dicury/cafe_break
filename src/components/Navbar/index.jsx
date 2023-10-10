"use client";

import React from "react";
import { Container, Icone, Links } from "@/components/Navbar/Navbar.styles";

function Navbar() {
  return (
    <Container>
      <Links href="/">
        <Icone src="/images/icons/shop.svg" alt="aba de produtos" />
      </Links>
      <Links href="/sobreNos">
        <Icone src="/images/icons/book.svg" alt="aba sobre nós" />
      </Links>
      <Links href="/">
        <Icone src="/images/icons/user.svg" alt="aba usuário" />
      </Links>
      <Links href="https://github.com/Dicury">
        <Icone
          src="/images/icons/github-logo.svg"
          alt="página do github de Mateus Cury"
        />
      </Links>
    </Container>
  );
}

export default Navbar;

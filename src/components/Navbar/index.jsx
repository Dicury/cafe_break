"use client";

import React from "react";
import {
  NavbarDiv,
  NavbarIcons,
  NavbarLink,
} from "@/components/Navbar/Navbar.styles";

function Navbar() {
  return (
    <NavbarDiv>
      <NavbarLink href="/">
        <NavbarIcons src="/images/icons/shop.svg" alt="aba de produtos" />
      </NavbarLink>
      <NavbarLink href="/sobreNos">
        <NavbarIcons src="/images/icons/book.svg" alt="aba sobre nós" />
      </NavbarLink>
      <NavbarLink href="/">
        <NavbarIcons src="/images/icons/user.svg" alt="aba usuário" />
      </NavbarLink>
      <NavbarLink href="https://github.com/Dicury">
        <NavbarIcons
          src="/images/icons/github-logo.svg"
          alt="página do github de Mateus Cury"
        />
      </NavbarLink>
    </NavbarDiv>
  );
}

export default Navbar;

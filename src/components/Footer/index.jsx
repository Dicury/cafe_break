"use client";

import React from "react";
import { Background, Github, Icone } from "@/components/Footer/Footer.styles";
function Footer() {
  return (
    <Background>
      <Github href="https://github.com/Dicury">
        <Icone
          src="/images/icons/github-logo-footer.svg"
          alt="página do github de Mateus Cury"
        />
      </Github>
    </Background>
  );
}

export default Footer;

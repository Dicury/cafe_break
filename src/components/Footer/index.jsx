"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
    width: 100vw;
    height: 10vh;
    padding: 2rem;
  }
`;
const Github = styled(Link)`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;
const Icone = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
    width: 50px;
  }
`;

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

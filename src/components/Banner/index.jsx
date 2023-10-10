"use client";

import React from "react";
import {
  Botao,
  ButtonContainer,
  ButtonIcon,
  Container,
  Img,
  Texto,
  Titulo,
  TituloDestaque,
} from "@/components/Banner/Banner.styles";

function Banner() {
  return (
    <Container>
      <Titulo>
        O favorito de todos vai deixar seu dia
        <TituloDestaque> ainda melhor.</TituloDestaque>
      </Titulo>
      <Texto>Aumente sua produtividade com nosso incrível cappucino.</Texto>
      <Img src="/images/banner-cappucino.svg" />
      <Botao>
        Pedir agora
        <ButtonContainer>
          <ButtonIcon src="/images/icons/shopping-cart-white.svg" />
        </ButtonContainer>
      </Botao>
    </Container>
  );
}

export default Banner;

"use client";

import React from "react";
import {
  Botao,
  ButtonContainer,
  ButtonIcon,
  ContainerExterno,
  ContainerInterno,
  Img,
  Texto,
  Titulo,
  TituloDestaque,
} from "@/components/Banner/Banner.styles";

function Banner() {
  return (
    <ContainerExterno>
      <ContainerInterno>
        <Titulo>
          O favorito de todos vai deixar seu dia
          <TituloDestaque> ainda melhor.</TituloDestaque>
        </Titulo>
        <Texto>
          Aumente sua produtividade com nosso incrível cappucino, o produto mais
          famoso e vendido de nossa loja.
        </Texto>
      </ContainerInterno>
      <Botao>
        Pedir agora
        <ButtonContainer>
          <ButtonIcon src="/images/icons/shopping-cart-white.svg" />
        </ButtonContainer>
      </Botao>
      <Img src="/images/banner-cappucino.svg" />
    </ContainerExterno>
  );
}

export default Banner;

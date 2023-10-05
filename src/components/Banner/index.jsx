"use client";

import React from "react";
import {
  BannerButton,
  BannerButtonContainer,
  BannerButtonIcon,
  BannerContainer,
  BannerImg,
  BannerTexto,
  BannerTitulo,
  BannerTituloDestaque,
} from "@/components/Banner/Banner.styles";

function Banner() {
  return (
    <BannerContainer>
      <BannerTitulo>
        O favorito de todos vai deixar seu dia
        <BannerTituloDestaque> ainda melhor.</BannerTituloDestaque>
      </BannerTitulo>
      <BannerTexto>
        Aumente sua produtividade com nosso incrível cappucino.
      </BannerTexto>
      <BannerImg src="/images/banner-cappucino.svg" />
      <BannerButton>
        Pedir agora
        <BannerButtonContainer>
          <BannerButtonIcon src="/images/icons/shopping-cart-white.svg" />
        </BannerButtonContainer>
      </BannerButton>
    </BannerContainer>
  );
}

export default Banner;

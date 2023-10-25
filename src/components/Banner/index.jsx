"use client";

import React from "react";
import ListaProdutos from "@/api/api";
import {
  ContainerBotao,
  ContainerExterno,
  ContainerInterno,
  Img,
  Texto,
  TextoBotao,
  Titulo,
  TituloDestaque,
  BotaoCompraEstilizado,
} from "@/components/Banner/Banner.styles";

function Banner() {
  const produtoDivulgado = ListaProdutos[4];

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
      <ContainerBotao>
        <TextoBotao>Pedir Agora</TextoBotao>
        <BotaoCompraEstilizado
          className="Botao"
          nome={produtoDivulgado.nome}
          id={produtoDivulgado.id}
          imagem={produtoDivulgado.imagem}
          preco={produtoDivulgado.preco}
          key={produtoDivulgado.id}
        />
      </ContainerBotao>
      <Img src="/images/banner-cappucino.svg" />
    </ContainerExterno>
  );
}

export default Banner;

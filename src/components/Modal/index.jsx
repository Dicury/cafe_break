"use client";

import React from "react";

import {
  Fundo,
  Titulo,
  ContainerBotoes,
  BotaoCancelar,
  BotaoAdicionar,
  Container,
  Texto,
} from "@/components/Modal/Modal.style";

export default function Modal({ titulo, produto, prosseguir, retornar }) {
  return (
    <Fundo>
      <Container>
        <Titulo>{titulo}</Titulo>
        <Texto>Deseja adicionar {produto} ao carrinho?</Texto>
        <ContainerBotoes>
          <BotaoCancelar>{retornar}</BotaoCancelar>
          <BotaoAdicionar>{prosseguir}</BotaoAdicionar>
        </ContainerBotoes>
      </Container>
    </Fundo>
  );
}

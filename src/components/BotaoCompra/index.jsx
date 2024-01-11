"use client";

import React, { useState } from "react";
import useCarrinhoContext from "@/hooks/useCarrinhoContext";

import {
  Fundo,
  Titulo,
  ContainerBotoes,
  BotaoCancelar,
  BotaoAdicionar,
  BotaoCompraIcone,
  BotaoCompraContainer,
  Container,
  Texto,
} from "@/components/BotaoCompra/BotaoCompra.styles";

export default function BotaoCompra({ nome, id, preco, imagem, ...props }) {
  const { adicionarCarrinho } = useCarrinhoContext();
  const [modalAtiva, setModalAtiva] = useState(false);

  const ativarModal = () => {
    adicionarCarrinho(id, nome, preco, imagem);
    setModalAtiva(true);
  };

  return (
    <>
      <BotaoCompraContainer onClick={ativarModal} {...props}>
        <BotaoCompraIcone src="/images/icons/shopping-cart-white.svg" />
      </BotaoCompraContainer>
      {modalAtiva && (
        <Fundo>
          <Container>
            <Titulo>Produto Adicionado!</Titulo>
            <Texto>O produto {nome} foi ao carrinho.</Texto>
            <ContainerBotoes>
              <BotaoCancelar onClick={() => setModalAtiva(false)}>
                Voltar
              </BotaoCancelar>
              <BotaoAdicionar href="/carrinho">Ir ao Carrinho</BotaoAdicionar>
            </ContainerBotoes>
          </Container>
        </Fundo>
      )}
    </>
  );
}

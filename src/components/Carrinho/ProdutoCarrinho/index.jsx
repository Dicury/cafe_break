import React from "react";
import {
  Botao,
  BotaoContainerExterno,
  BotaoContainerInterno,
  Container,
  DeletarBotao,
  DeletarImagem,
  ImagemProduto,
  Texto,
  TextoContainer,
} from "@/components/Carrinho/ProdutoCarrinho/ProdutoCarrinho.styles";

function ProdutoCarrinho() {
  return (
    <Container>
      <DeletarBotao>
        <DeletarImagem src="/images/icons/delete.svg" />
      </DeletarBotao>
      <ImagemProduto src="/images/products/cappucino.svg" />
      <TextoContainer>
        <Texto>Cappucino</Texto>
        <Texto>R$: 18,00</Texto>
      </TextoContainer>
      <BotaoContainerExterno>
        <BotaoContainerInterno>
          <Botao src="/images/icons/add.svg" />
        </BotaoContainerInterno>
        <Texto>2</Texto>
        <BotaoContainerInterno>
          <Botao src="/images/icons/subtract.svg" />
        </BotaoContainerInterno>
      </BotaoContainerExterno>
    </Container>
  );
}

export default ProdutoCarrinho;

import React from "react";
import useCarrinhoContext from "@/hooks/useCarrinhoContext";
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

function ProdutoCarrinho({ nome, preco, quantidade, imagem, id }) {
  const { removerDoCarrinho, mudarQuantidade } = useCarrinhoContext();

  return (
    <Container>
      <DeletarBotao onClick={() => removerDoCarrinho(id)}>
        <DeletarImagem src="/images/icons/delete.svg" />
      </DeletarBotao>
      <ImagemProduto src={imagem} />
      <TextoContainer>
        <Texto>{nome}</Texto>
        <Texto>R$: {preco},00</Texto>
      </TextoContainer>
      <BotaoContainerExterno>
        <BotaoContainerInterno onClick={() => mudarQuantidade(id, "adicionar")}>
          <Botao src="/images/icons/add.svg" />
        </BotaoContainerInterno>
        <Texto>{quantidade}</Texto>
        <BotaoContainerInterno onClick={() => mudarQuantidade(id, "subtrair")}>
          <Botao src="/images/icons/subtract.svg" />
        </BotaoContainerInterno>
      </BotaoContainerExterno>
    </Container>
  );
}

export default ProdutoCarrinho;

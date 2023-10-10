import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 2fr auto;
  grid-template-rows: repeat(3, 1fr);
  margin: 2rem;
`;
export const DeletarBotao = styled.button`
  border: none;
  background: none;
  grid-column: 1/2;
  grid-row: 1/4;
  padding: 0.5rem;
`;
export const DeletarImagem = styled.img``;
export const ImagemProduto = styled.img`
  object-fit: cover;
  width: 72px;
  height: 72px;
  grid-column: 2/3;
  grid-row: 1/4;
`;

export const TextoContainer = styled.div`
  grid-column: 3/4;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Texto = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
`;
export const BotaoContainerExterno = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  grid-column: 4/5;
  grid-row: 3/4;
`;
export const BotaoContainerInterno = styled.button`
  border: none;
  background: none;
`;
export const Botao = styled.img`
  width: 13px;
  height: 12px;
`;

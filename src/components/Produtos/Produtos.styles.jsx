"use client";

import styled from "styled-components";

export const ProdutosContainerFundo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const ProdutosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 155px;
  height: 170px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 0.5rem;
`;
export const ProdutosAvaliacaoContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  width: 50px;
  padding: 1px;
  border-radius: 5px;
  gap: 4px;
`;
export const ProdutosAvaliacao = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkBrown};
`;
export const ProdutosAvaliacaoImg = styled.img``;

export const ProdutosImg = styled.img`
  align-self: center;
  width: 135px;
  height: 100px;
`;
export const ProdutosTitulo = styled.h5`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkBrown};
`;

export const ProdutosPrecoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProdutosPreco = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkBrown};
`;
export const BannerButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.orange};
  width: 22px;
  height: 22px;
  border-radius: 100px;
`;
export const BannerButtonIcon = styled.img`
  width: 15px;
`;

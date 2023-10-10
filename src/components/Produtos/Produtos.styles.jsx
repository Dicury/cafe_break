"use client";

import styled from "styled-components";

export const ContainerFundo = styled.div`
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

export const Container = styled.div`
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
export const AvaliacaoContainer = styled.div`
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
export const Avaliacao = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkBrown};
`;
export const AvaliacaoImg = styled.img``;

export const Img = styled.img`
  align-self: center;
  width: 135px;
  height: 100px;
`;
export const Titulo = styled.h5`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkBrown};
`;

export const PrecoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Preco = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkBrown};
`;
export const BannerBotaoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.orange};
  width: 22px;
  height: 22px;
  border-radius: 100px;
`;
export const BannerBotaoIcone = styled.img`
  width: 15px;
`;

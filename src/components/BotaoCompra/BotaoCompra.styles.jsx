"use client";

import Colors from "@/tokens/colors";
import FontSize from "@/tokens/fontSize";
import Spacings from "@/tokens/spacings";
import Link from "next/link";
import { styled } from "styled-components";

export const Fundo = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Spacings.GAP_S};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 250px;
  padding: ${Spacings.PADDING_M};
  background-color: ${Colors.BRANCO};
  border-radius: 20px;
`;

export const Titulo = styled.div`
  font-weight: 600;
  font-size: ${FontSize.TITULO_S};
  color: ${Colors.SECUNDARIA};
`;

export const Texto = styled.p`
  white-space: pre-line;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  gap: ${Spacings.GAP_S};
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoAdicionar = styled(Link)`
  background-color: ${Colors.PRIMARIA};
  text-decoration: none;
  color: ${Colors.BRANCO};
  border: none;
  padding: ${Spacings.PADDING_S};
  border-radius: 10px;
  font-weight: 500;
  font-size: ${FontSize.CORPO_L};
`;

export const BotaoCancelar = styled.button`
  background-color: ${Colors.TEXTO_BASE};
  color: ${Colors.BRANCO};
  border: none;
  padding: ${Spacings.PADDING_S};
  border-radius: 10px;
  font-weight: 500;
  font-size: ${FontSize.CORPO_L};
`;

export const BotaoCompraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PRIMARIA};
  width: auto;
  height: auto;
  border-radius: 100px;
  padding: ${Spacings.GAP_VS};

  &:hover {
    scale: 1.05;
  }
`;
export const BotaoCompraIcone = styled.img`
  width: 15px;

  @media (min-width: 1000px) {
    width: 25px;
  }
`;

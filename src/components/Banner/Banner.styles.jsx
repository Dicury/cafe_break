"use client";

import styled from "styled-components";
import BotaoCompra from "../BotaoCompra";
import Colors from "@/tokens/colors";
import Spacings from "@/tokens/spacings";
import FontSize from "@/tokens/fontSize";

export const ContainerExterno = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  padding: ${Spacings.PADDING_M};
  background-color: ${Colors.FUNDO};
  gap: ${Spacings.GAP_S};

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(3, auto);
    padding: ${Spacings.PADDING_L} ${Spacings.PADDING_L};
    gap: ${Spacings.GAP_VS};
  }

  @media (min-width: 1000px) {
    padding: ${Spacings.PADDING_VW_S} ${Spacings.PADDING_VW_L};
  }
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.GAP_S};

  @media (min-width: 600px) {
    grid-column: 1/4;
    width: 40vw;

    margin-top: 5vh;
    font-size: ${FontSize.TITULO_L};
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    margin-top: 5vh;
  }
`;

export const Titulo = styled.h3`
  color: ${Colors.SECUNDARIA};
  font-weight: 600;
  font-size: ${FontSize.TITULO_S};

  @media (min-width: 600px) {
    font-size: ${FontSize.TITULO_L};
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    font-size: ${FontSize.TITULO_H};
  }
`;
export const TituloDestaque = styled.span`
  color: ${Colors.PRIMARIA};
  font-weight: 600;
  font-size: ${FontSize.TITULO_S};

  @media (min-width: 600px) {
    font-size: ${FontSize.TITULO_L};
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    font-size: ${FontSize.TITULO_H};
  }
`;
export const Texto = styled.p`
  font-size: ${FontSize.CORPO_M};
  font-weight: 400;

  @media (min-width: 600px) {
    grid-column: 1/4;

    font-size: ${FontSize.CORPO_H};
  }
`;
export const Img = styled.img`
  justify-self: center;
  width: 200px;
  height: 180px;

  @media (min-width: 600px) {
    grid-column: 4/5;
    grid-row: 1/4;

    width: 300px;
    height: 300px;
    align-self: center;
  }

  @media (min-width: 1000px) {
    width: 500px;
    height: 400px;
  }
`;
export const ContainerBotao = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-self: center;
  background-color: ${Colors.SECUNDARIA};
  color: ${Colors.BRANCO};
  width: 210px;
  border-radius: 33px;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: ${Spacings.GAP_S};

  @media (min-width: 600px) {
    grid-row: 2/3;
    margin: ${Spacings.PADDING_S} 0;
    justify-self: left;
  }

  @media (min-width: 1000px) {
    margin-bottom: ${Spacings.PADDING_M};
  }
`;

export const TextoBotao = styled.p`
  color: ${Colors.BRANCO};
`;

export const BotaoCompraEstilizado = styled(BotaoCompra)`
  @media (min-width: 1000px) {
    width: 35px;
    > img {
      width: 20px;
    }
  }
`;

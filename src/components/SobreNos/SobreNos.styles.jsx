"use client";
import Colors from "@/tokens/colors";
import FontSize from "@/tokens/fontSize";
import Spacings from "@/tokens/spacings";
import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacings.PADDING_M};
  background-color: ${Colors.FUNDO};
  width: 100vw;
  height: auto;
`;

export const BannerFundo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

export const Banner = styled.img`
  width: 80vw;
  height: 30vh;
  padding: ${Spacings.PADDING_S};
  border-radius: 10px;
  background-color: ${Colors.BRANCO};

  @media (min-width: 600px) {
    height: 40vh;
  }

  @media (min-width: 1000px) {
    height: 70vh;
    padding: ${Spacings.PADDING_L};
  }
`;
export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Spacings.PADDING_M};
  gap: ${Spacings.GAP_M};

  @media (min-width: 600px) {
    padding: ${Spacings.PADDING_M} ${Spacings.PADDING_VW_H};
  }
`;
export const Titulo = styled.h3`
  color: ${Colors.SECUNDARIA};
  font-size: ${FontSize.TITULO_M};
  font-weight: 600;

  @media (min-width: 600px) {
    text-align: center;
    font-size: ${FontSize.TITULO_L};
  }

  @media (min-width: 1000px) {
    font-size: ${FontSize.TITULO_H};
  }
`;
export const Texto = styled.p`
  text-align: justify;
  font-size: ${FontSize.CORPO_M};
  font-weight: 400;

  @media (min-width: 1000px) {
    font-size: ${FontSize.CORPO_H};
  }
`;

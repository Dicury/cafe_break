"use client";

import Colors from "@/tokens/colors";
import FontSize from "@/tokens/fontSize";
import Spacings from "@/tokens/spacings";
import styled from "styled-components";

export const Titulo = styled.h4`
  padding: ${Spacings.PADDING_S} 0 ${Spacings.PADDING_S} ${Spacings.PADDING_M};
  color: ${Colors.SECUNDARIA};

  @media (min-width: 600px) {
    padding: ${Spacings.PADDING_M} 0 0 ${Spacings.PADDING_L};
    font-size: ${FontSize.TITULO_M};
  }

  @media (min-width: 1000px) {
    font-size: ${FontSize.TITULO_L};
    padding-left: ${Spacings.PADDING_VW_L};
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${Spacings.PADDING_S};
  grid-template-columns: auto auto;
  gap: ${Spacings.GAP_VS};

  @media (min-width: 600px) {
    padding: ${Spacings.PADDING_S};
    grid-template-columns: repeat(3, auto);
    gap: ${Spacings.GAP_S};
  }

  @media (min-width: 1000px) {
    padding: ${Spacings.PADDING_M};
    gap: ${Spacings.GAP};
  }
`;

export const ContainerProduto = styled.div`
  flex-basis: 30%;
  @media (min-width: 1000px) {
    flex-basis: 20%;
    flex-shrink: 0;
  }
`;

"use client";
import Colors from "@/tokens/colors";
import FontSize from "@/tokens/fontSize";
import Spacings from "@/tokens/spacings";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${Colors.FUNDO};
  position: relative;
`;
export const Texto = styled.h4`
  padding: 0 0 ${Spacings.PADDING_S} ${Spacings.PADDING_M};
  color: ${Colors.SECUNDARIA};

  @media (min-width: 600px) {
    padding-left: ${Spacings.PADDING_M};
    font-size: ${FontSize.TITULO_M};
  }

  @media (min-width: 1000px) {
    font-size: ${FontSize.TITULO_L};
    padding-left: ${Spacings.PADDING_VW_L};
    padding-bottom: ${Spacings.PADDING_M};
  }
`;
export const ListaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${Spacings.PADDING_S} 0 ${Spacings.PADDING_S} 0;
  background-color: ${Colors.FUNDO_DESTAQUE};

  @media (min-width: 600px) {
    padding-left: ${Spacings.PADDING_S};
  }

  @media (min-width: 1000px) {
    padding-left: 0;
    justify-content: center;
  }
`;

export const Scroll = styled.div`
  display: flex;
  gap: ${Spacings.GAP_VS};

  overflow-x: scroll;
  padding-left: ${Spacings.PADDING_M};
  overscroll-behavior-inline: contain;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1000px) {
    padding-left: 0;
    gap: ${Spacings.GAP_S};
  }
`;

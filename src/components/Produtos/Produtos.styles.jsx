"use client";

import Colors from "@/tokens/colors";
import FontSize from "@/tokens/fontSize";
import Spacings from "@/tokens/spacings";
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
  background-color: ${Colors.BRANCO};
  border-radius: 10px;
  padding: ${Spacings.PADDING_VS};

  @media (min-width: 1000px) {
    width: 350px;
    height: 360px;
    padding: ${Spacings.PADDING_S};
  }
`;
export const AvaliacaoContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.BRANCO};
  width: 50px;
  padding: 1px;
  border-radius: 5px;
  gap: 4px;

  @media (min-width: 1000px) {
    top: 30px;
    left: 25px;
  }
`;
export const Avaliacao = styled.p`
  font-size: ${FontSize.CORPO_S};
  font-weight: 700;
  color: ${Colors.SECUNDARIA};
`;
export const AvaliacaoImg = styled.img``;

export const Img = styled.img`
  align-self: center;
  width: 135px;
  height: 100px;

  @media (min-width: 1000px) {
    width: 320px;
    height: 310px;
  }
`;
export const Titulo = styled.h5`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${Colors.SECUNDARIA};

  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const PrecoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Preco = styled.p`
  font-size: ${FontSize.CORPO_S};
  font-weight: 500;
  color: ${Colors.SECUNDARIA};

  @media (min-width: 1000px) {
    font-size: ${FontSize.CORPO_VH};
    align-self: center;
    font-weight: 600;
  }
`;

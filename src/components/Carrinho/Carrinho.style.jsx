import Colors from "@/tokens/colors";
import FontSize from "@/tokens/fontSize";
import Spacings from "@/tokens/spacings";
import Link from "next/link";
import styled from "styled-components";

export const ContainerExterno = styled.div`
  padding: ${Spacings.PADDING_VH_M} ${Spacings.PADDING_VW_L};
  @media (min-width: 600px) {
  }
`;

export const TituloContainer = styled.div`
  display: flex;
  padding-bottom: ${Spacings.PADDING_S};
  border-bottom: solid 2px ${Colors.PRIMARIA};
  justify-content: space-between;
`;

export const InfosContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    align-items: end;
  }
`;

export const InfosContainerInterno = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  @media (min-width: 600px) {
    width: 250px;
  }
`;

export const Texto = styled.h3`
  color: ${Colors.SECUNDARIA};
  font-size: ${FontSize.TITULO_S};
  font-weight: 700;

  @media (min-width: 600px) {
    font-size: ${FontSize.TITULO_M};
  }
`;

export const PrecoContainer = styled.div`
  display: grid;
  margin-bottom: 1rem;
  justify-content: space-between;
  grid-template-columns: auto auto;

  @media (min-width: 600px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1000px) {
  }
`;
export const PrecoTexto = styled.p`
  color: ${Colors.SECUNDARIA};
  text-align: left;
  font-size: ${FontSize.CORPO_M};
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: ${FontSize.CORPO_H};
  }
`;

export const PrecoTextoTotal = styled(PrecoTexto)`
  font-weight: 700;
`;

export const BotaoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Botao = styled.button`
  display: flex;
  justify-self: center;
  width: 200px;
  height: 55px;
  padding: 12px 32px;
  grid-column: 1/3;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
  background: ${Colors.SECUNDARIA};
  color: ${Colors.BRANCO};
  border: none;
  font-size: 16px;
  font-weight: 600;
`;
export const ContainerLink = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    gap: ${Spacings.GAP_S};
    align-self: flex-start;
  }
`;
export const Voltar = styled(Link)`
  color: ${Colors.PRIMARIA};
  font-size: ${FontSize.CORPO_L};
  font-weight: 500;
  text-decoration: none;
`;

export const Icone = styled.img``;

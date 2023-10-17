import Link from "next/link";
import styled from "styled-components";

export const ContainerExterno = styled.div`
  @media (min-width: 600px) {
    padding: 5vh 10vw;
  }

  @media (min-width: 1000px) {
  }
`;

export const TituloContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  border-bottom: solid 2px ${(props) => props.theme.colors.orange};
`;

export const InfosContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    align-items: end;
  }

  @media (min-width: 1000px) {
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
  color: ${(props) => props.theme.colors.darkBrown};
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 600px) {
    font-size: 32px;
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
  color: ${(props) => props.theme.colors.darkBrown};
  text-align: left;
  font-size: 14px;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

export const PrecoTextoTotal = styled.p`
  color: ${(props) => props.theme.colors.darkBrown};
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 600px) {
    font-size: 18px;
  }
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
  background: ${(props) => props.theme.colors.darkBrown};
  color: ${(props) => props.theme.colors.white};
  border: none;
  font-size: 16px;
  font-weight: 600;
`;
export const ContainerLink = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    gap: 1rem;
    align-self: flex-start;
  }
`;
export const Voltar = styled(Link)`
  color: ${(props) => props.theme.colors.orange};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const Icone = styled.img``;

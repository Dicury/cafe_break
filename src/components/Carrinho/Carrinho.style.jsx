import styled from "styled-components";

export const CarrinhoTituloContainer = styled.div`
  display: flex;
  margin: 2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  border-bottom: solid 2px ${(props) => props.theme.colors.orange};
`;

export const CarrinhoInfosContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CarrinhoTexto = styled.h3`
  color: ${(props) => props.theme.colors.darkBrown};
  font-size: 20px;
  font-weight: 700;
`;
export const CarrinhoPrecoContainer = styled.div`
  display: grid;
  margin: 2rem;
  width: 50%;
  justify-content: space-between;
  grid-template-columns: auto auto;
`;
export const CarrinhoPrecoTexto = styled.p`
  color: ${(props) => props.theme.colors.darkBrown};
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

export const CarrinhoPrecoTextoTotal = styled.p`
  color: ${(props) => props.theme.colors.darkBrown};
  font-size: 14px;
  font-weight: 700;
`;

export const CarrinhoBotaoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const CarrinhoBotao = styled.button`
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

"use client";
import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
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

  @media (min-width: 600px) {
  }

  @media (min-width: 1000px) {
  }
`;

export const Banner = styled.img`
  width: 80vw;
  height: 30vh;
  padding: 1.4rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: 600px) {
    height: 40vh;
  }

  @media (min-width: 1000px) {
    height: 70vh;
    padding: 3rem;
  }
`;
export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  @media (min-width: 600px) {
    padding: 2rem 15vw;
  }
`;
export const Titulo = styled.h3`
  color: ${(props) => props.theme.colors.darkBrown};
  font-size: 24px;
  font-weight: 600;

  @media (min-width: 600px) {
    text-align: center;
    font-size: 32px;
  }

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;
export const Texto = styled.p`
  text-align: justify;
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;

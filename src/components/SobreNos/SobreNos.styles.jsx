"use client";
import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
  height: auto;
`;

export const BannerFundo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 220px;
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const Banner = styled.img`
  width: 300px;
  height: 200px;
  padding: 1.4rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
`;
export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;
export const Titulo = styled.h3`
  color: ${(props) => props.theme.colors.darkBrown};
  font-size: 24px;
  font-weight: 600;
`;
export const Texto = styled.p`
  text-align: justify;
  font-size: 14px;
  font-weight: 400;
`;

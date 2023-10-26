import Colors from "@/tokens/colors";
import Spacings from "@/tokens/spacings";
import Link from "next/link";
import styled from "styled-components";

export const Background = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.FUNDO};
    width: 100vw;
    height: 10vh;
    padding: ${Spacings.PADDING_M};
  }
`;
export const Github = styled(Link)`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;
export const Icone = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
    width: 50px;
  }
`;

import Link from "next/link";
import styled from "styled-components";

export const NavbarDiv = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  gap: 1rem;
  margin-left: 10%;
  align-items: baseline;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.darkBrown};
  padding: 0.5rem 1rem;
  border-radius: 20px 20px 0 0;
  width: 80vw;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
`;
export const NavbarIcons = styled.img`
  display: block;
  width: 50px;
  height: 50px;
`;

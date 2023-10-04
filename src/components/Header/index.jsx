"use client";

import React from "react";
import {
  CartButton,
  CartImg,
  CartSize,
  HeaderDiv,
  Logo,
} from "@/components/Header/Header.styles";

function Header() {
  return (
    <HeaderDiv>
      <Logo src="/images/branding/logo-coffe.svg" alt="logo" />
      <CartButton>
        <CartImg src="/images/icons/shopping-cart.svg" alt="shopping cart" />
        <CartSize>2</CartSize>
      </CartButton>
    </HeaderDiv>
  );
}

export default Header;

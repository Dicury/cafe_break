import { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";

export default function useCarrinhoContext() {
  const context = useContext(CarrinhoContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
}

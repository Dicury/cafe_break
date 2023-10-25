"use client";

import transformarLista from "@/shared/transformarLista";
import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoContextProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (id, nome, preco, imagem) => {
    const itemExistente = carrinho.find((item) => item.id === id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      const novoProduto = {
        id: id,
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: 1,
      };
      setCarrinho([...carrinho, novoProduto]);
    }
  };

  function filtrarCarrinho(carrinho, idPassado) {
    const newArray = carrinho.filter((produto) => produto.id !== idPassado);
    return newArray;
  }

  const removerDoCarrinho = (id) => {
    const newArray = filtrarCarrinho(carrinho, id);
    setCarrinho(newArray);
  };

  const mudarQuantidade = (idPassado, operacao) => {
    const newArray = transformarLista(operacao, carrinho, idPassado);
    setCarrinho(newArray);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        adicionarCarrinho,
        removerDoCarrinho,
        mudarQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

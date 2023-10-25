function transformarLista(operacao, lista, idPassado) {
  const newArray = lista?.map((produto) => {
    if (produto.id === idPassado) {
      if (operacao === "adicionar") {
        produto.quantidade = produto.quantidade + 1;
      }
      if (operacao === "subtrair" && produto.quantidade > 1) {
        produto.quantidade = produto.quantidade - 1;
      }
    }
    return produto;
  });
  return newArray;
}

export default transformarLista;

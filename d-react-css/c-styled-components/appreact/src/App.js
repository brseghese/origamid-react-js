import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? "green" : "red")};
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Esse é um parágrafo.</Paragrafo>
          <Preco cor="#84e">R$ 2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Esse é um parágrafo.</Paragrafo>
          <Preco cor="#53d956">R$ 1000</Preco>
        </Produto>
      </ProdutosContainer>
      <Comprar ativo={ativo} onClick={handleClick}>
        Compre Aqui
      </Comprar>
    </div>
  );
};

export default App;

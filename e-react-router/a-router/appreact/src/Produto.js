import React from "react";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  NavLink,
} from "react-router-dom";
import Head from "./Head";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";
import ProdutoDescricao from "./ProdutoDescricao";

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search);

  return (
    <div>
      <Head title="Produto" description="Essa é a descrição de Produto" />
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink> |{" "}
        <NavLink to="avaliacao">Avaliação</NavLink> |{" "}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="/avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="/customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;

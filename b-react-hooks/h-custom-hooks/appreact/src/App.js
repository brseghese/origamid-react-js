import React from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;

  if (loading) return <p>Carregando...</p>;

  if (data)
    return (
      <div>
        <button style={{ marginRight: "1rem" }} onClick={handleClick}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>
        <p>Produto preferido: {produto}</p>
        {data.map((produto) => (
          <ul key={produto.id}>
            <li>{produto.nome}</li>
          </ul>
        ))}
      </div>
    );
  else return null;
};

export default App;

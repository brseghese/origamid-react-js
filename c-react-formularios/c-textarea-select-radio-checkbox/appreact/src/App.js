import React from "react";

const App = () => {
  const [textarea, setTextarea] = React.useState("");
  const [select, setSelect] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(["azul"]);

  function handleChange({ target }) {
    setProduto(target.value);
  }

  function handleChangeCheckbox({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form>
      <h2>Textarea</h2>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      <p>Text Area: {textarea}</p>
      <h2>Select</h2>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>Select: {select}</p>
      <h2>Radio - Produto</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="notebook"
        />
        Notebook
      </label>
      <p>Radio: {produto}</p>
      <h2>Radio - Cor</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === "azul"}
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === "vermelho"}
          value="vermelho"
        />
        Vermelho
      </label>
      <p>Radio: {cor}</p>
      <h2>Checkbox - Termos</h2>
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos.
      </label>
      <p>Checkbox: {termos && <span>Aceitou os termos</span>} </p>
      <h2>Checkbox - Cores</h2>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={cores.includes("azul")}
          onChange={handleChangeCheckbox}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes("vermelho")}
          onChange={handleChangeCheckbox}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;

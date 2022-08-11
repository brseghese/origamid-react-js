import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";
import InputValidate from "./Form/InputValidate";
import useValidateInput from "./Hooks/useValidateInput";

const App = () => {
  const [nome, setNome] = React.useState("");
  // const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("Azul");
  const [frutas, setFrutas] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  const cep = useValidateInput("cep");
  const email = useValidateInput("email");
  const apelido = useValidateInput(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      {/* <Input id="email" label="Email" value={email} setValue={setEmail} /> */}
      <InputValidate label="Email" id="email" type="email" {...email} />
      <InputValidate
        label="Cep"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <InputValidate label="Apelido" id="apelido" type="text" {...apelido} />
      <h3>Produtos</h3>
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <h3>Cores</h3>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <h3>Frutas</h3>
      <Radio
        options={["Abacaxi", "Laranja", "Morango"]}
        value={frutas}
        setValue={setFrutas}
      />
      <h3>Linguagens</h3>
      <Checkbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;

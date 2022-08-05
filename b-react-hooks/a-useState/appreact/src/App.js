import React from "react";
// import ButtonModal from "./ButtonModal";
// import Modal from "./Modal";

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar((contar) => contar + 1);
    setItems((items) => [...items, `Item ${contar + 1}`]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;

// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);

//   return (
//     <button onClick={() => setAtivo(!ativo)}>
//       {ativo ? "Botão Ativo" : "Botão Inativo"}
//     </button>
//   );
// };

// ---------- x ----------

// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);
//   const [dados, setDados] = React.useState({ nome: "Bruno", idade: 41 });

//   function handleClick() {
//     setAtivo(!ativo);
//     if (!ativo) setDados({ ...dados, faculdade: "Possui Faculdade" });
//     else setDados({ ...dados, faculdade: "Não Possui Faculdade" });
//   }

//   return (
//     <div>
//       <p>{dados.nome}</p>
//       <p>{dados.idade}</p>
//       <p>{dados.faculdade}</p>
//       <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
//     </div>
//   );
// };

// ---------- x ----------

// const App = () => {
//   const [modal, setModal] = React.useState(false);

//   return (
//     <div>
//       <Modal modal={modal} setModal={setModal} />
//       <ButtonModal setModal={setModal} />
//     </div>
//   );
// };

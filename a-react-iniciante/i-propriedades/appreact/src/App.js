import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {
  const { pathname } = window.location;
  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;

// const Titulo = ({ cor, texto }) => {
//   return <h1 style={{ color: cor }}>{texto}</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="tomato" texto="Props" />
//     </div>
//   );
// };

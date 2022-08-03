import React from "react";
import Titulo from "./Titulo";
import Form from "./Form/Form";

const Home = () => {
  return (
    <section>
      <Titulo texto="Home" />
      <p>Essa é a home do site</p>
      <Form />
    </section>
  );
};

export default Home;

import React from "react";
import "./App.css";
import foto from "./img/foto.jpg";
import dog from "./img/dog.svg";
import { ReactComponent as Dog } from "./img/dog.svg";
import DogSvg from "./DogSvg";

const App = () => {
  const [olho, setOlho] = React.useState(0);

  function handleClick() {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 50 * i);
    }
  }

  return (
    <div>
      <p className="perfil" onClick={handleClick}></p>
      <img src={dog} alt="Cachorro" />
      <Dog />
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;

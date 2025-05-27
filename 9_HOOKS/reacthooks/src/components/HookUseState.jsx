import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Rafaela";
  const [name, setName] = useState("Júkia");

  const changeNames = () => {
    userName = "Rafaela Oliveira";

    setName("Júkia Oliveira");
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
    </div>
  );
};

export default HookUseState;

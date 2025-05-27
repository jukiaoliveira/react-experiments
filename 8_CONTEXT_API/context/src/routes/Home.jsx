// 3 - alterando valor do contexto
// import {  useContext } from 'react';
//import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      {/* 6 - alterando contexto complexo */}

      <div>
        <button onClick={() => dispatch({ type: "RED" })}>
          Vermelho
        </button>
        <button onClick={() => dispatch({ type: "GREEN" })}>
          Verde
        </button>
      </div>
    </div>
  );
};

export default Home;

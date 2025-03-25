import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - imagem em src/assets
import city from "./assets/city.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderização de lista
import ListRender from "./components/ListRender";

// 7 - render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

// 9 - desestruturando props
import CarDetails from "./components/CarDetails";

// 11 - renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", km: 0, color: "red" },
  { id: 2, brand: "KIA", km: 83773, color: "blue" },
  { id: 3, brand: "Renault", km: 7843, color: "yellow" },
];

// 12 - fragments
import Fragment from "./components/Fragment";

// 13 - children
import Container from "./components/Container";

// 14 - função em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import Message from "./components/Message";

function App() {
  // 14 - função em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em src/assets */}
      <img src={city} alt="Cidade" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Julia" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="Ford" km="10000" color="red" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Chevrolet" km="20000" color="blue" />
      <CarDetails color="yellow" brand="Fiat" km="30000" />
      {/* 11 - renderização de listas com componentes */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - fragments */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu Container</p>
        </div>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message handleMessage={handleMessage} />
    </div>
  );
}

export default App;

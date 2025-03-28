import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Julia", email: "jurafaoliveira@icloud.com" }} />
    </div>
  );
}

export default App;
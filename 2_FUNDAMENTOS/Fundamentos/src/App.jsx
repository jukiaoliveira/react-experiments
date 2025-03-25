import './App.css';

// 2 - Importando o componente FirstComponent
import FirstComponent from './components/FirstComponent';

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent';

function App() {
  // 3 - Comentários
  return (
    <div className="App">
    {/* 3 - Comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
    <MyComponent />
  </div>
  );
}

export default App;

import "./App.css";

import FireworkImage from "./assets/fireworks.jpg";

import { Title } from "./components/Title";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${FireworkImage})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
          <Counter title="Dias" number="2" />
          <Counter title="Horas" number="1" />
          <Counter title="Minutos" number="10" />
          <Counter title="Segundos" number="18" />
        </div>
      </div>
    </div>
  );
}

export default App;

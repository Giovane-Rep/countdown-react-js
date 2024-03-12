import "./App.css";

import FireworkImage from "./assets/fireworks.jpg";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${FireworkImage})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

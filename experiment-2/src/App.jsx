import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState("medium");
  const [outlined, setOutlined] = useState(false);

  return (
    <div className="app">
      <div className="card">
        <h1>Experiment 2 🚀</h1>
        <p>Choose your button style</p>

        <div className="controls">
          <button onClick={() => setSize("small")}>Small</button>
          <button onClick={() => setSize("medium")}>Medium</button>
          <button onClick={() => setOutlined(!outlined)}>
            {outlined ? "Filled" : "Outlined"}
          </button>
        </div>

        <div className="preview">
          <button className={`main-btn ${size} ${outlined ? "outlined" : ""}`}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

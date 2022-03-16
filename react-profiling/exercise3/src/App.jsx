import React, { useState } from "react";
import { Box } from "./components/Box";
import "./App.css";

const boxKeys = Array(10)
  .fill(0)
  .map((_, i) => i);

function App() {
  const [text, setText] = useState();

  return (
    <div className="App">
      <section className="form-section">
        <label>
          Some text state
          <input onChange={(e) => setText(e.target.value)} />
        </label>
        {text}
      </section>
      <section className="box-collection">
        {boxKeys.map((key) => (
          <Box key={key} />
        ))}
      </section>
    </div>
  );
}

export default App;

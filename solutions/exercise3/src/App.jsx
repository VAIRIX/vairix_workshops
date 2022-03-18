import React, { useMemo, useState } from "react";
import { Box } from "./components/Box";
import "./App.css";

const boxKeys = Array(10)
  .fill(0)
  .map((_, i) => i);

// Alternative solution
// const boxList = boxKeys.map((key) => <Box key={key} />);

function App() {
  const [text, setText] = useState();

  const boxList = useMemo(() => boxKeys.map((key) => <Box key={key} />), []);

  return (
    <div className="App">
      <section className="form-section">
        <label>
          Some text state
          <input onChange={(e) => setText(e.target.value)} />
        </label>
        {text}
      </section>
      <section className="box-collection">{boxList}</section>
    </div>
  );
}

export default App;

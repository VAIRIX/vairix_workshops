import React, { useState } from 'react';
import { Box } from './components/Box';
import { colorPalettes } from './colors';
import './App.css';

const BoxCollection =
  ({ colors = [], onClickBox }) => {
    if (colors.length === 0) return null;

    return (
      <Box color={colors[0]} onClickBox={onClickBox}>
        <BoxCollection colors={colors.slice(1)} onClickBox={onClickBox} />
      </Box>
    );
  }

function App() {
  const [bgColor, setBgColor] = useState("white");

  const toggleDarkMode = () => {
    setBgColor(bgColor === "white" ? "black" : "white");
  }

  const onClickBox = (color) => {
    console.log(`Clicked box with ${color} color`);
  }

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <button onClick={toggleDarkMode}>Toggle dark mode</button>
      <section>
        {colorPalettes.map(palette =>
          <BoxCollection colors={palette} key={palette[0]} onClickBox={onClickBox} />
        )}
      </section>
    </div>
  );
}

export default App;

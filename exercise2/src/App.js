import './App.css';
import { useState } from 'react';
import { Input } from './components/Input';

// [0, 1, 2, 3, ...]
const inputList = [...Array(15).keys()];

function App() {
  const [formData, setFormData] = useState({});

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const filledFields = Object.values(formData).filter(v => v).length;

  return (
    <div className="form">
      <h1>Filled fields: {filledFields}</h1>
      <form onChange={handleFormChange}>
        {inputList.map((n) =>
          <Input
            name={`input-${n}`}
            key={n} />
        )}
      </form>
    </div>
  );
}

export default App;

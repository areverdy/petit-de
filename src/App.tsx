import { useState } from 'react'
import Die from './Die'

function App() {
  const [dieValue, setdieValue] = useState<number>(1);

  const rollDie =(newValue: number) => {
    setdieValue(newValue);
  };

  return (
    <>
      <div>
        <Die onRoll={rollDie} />
        <Die onRoll={rollDie} />
        <Die onRoll={rollDie} />
        <p>{dieValue}</p>
      </div>
    </>
  );
};

export default App

import { useState } from 'react'
import Calc from './Calc'

// function App() {
const App = () => {
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<number>(200);
  // const [y, setY] = useState<number>("ab");
  const [oper, setOper] = useState<string>("+");
  // const [oper, setOper] = useState<string>("&");

  return (
    <div>
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
};

export default App

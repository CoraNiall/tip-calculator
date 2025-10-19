import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Dropdown from './components/Dropdown';
import Result from './components/Result';
import Button from './components/Button';

function App() {
  const [bill, setBill] = useState(Number(''));
  const [tipValue, setTipValue] = useState(0);
  const [totalBill, setTotalBill] = useState(0);

  const onAddBill = value => {
    setBill(Number(value));
  };

  const onAddTip = value => {
    tipValue > 0
      ? setTipValue((Number(value) + Number(tipValue)) / 2)
      : setTipValue(value);
  };

  const onTotalBill = () => {
    const total = bill + (bill * tipValue) / 100;
    setTotalBill(total.toFixed(2));
    return totalBill;
  };

  const onResetBill = () => {
    setBill(0);
    setTipValue(0);
    setTotalBill(0);
  };

  return (
    <div className="App">
      <Question onAddBill={onAddBill} bill={bill}>
        How much is the bill? £
      </Question>
      <Dropdown onAddTip={onAddTip}>How much did you enjoy the food?</Dropdown>
      <Dropdown onAddTip={onAddTip}>
        How much did your friend enjoy the food?
      </Dropdown>
      <Button onClick={onTotalBill}>Submit</Button>
      <Button onClick={onResetBill}>Reset</Button>
      <h4>Result:</h4>
      <Result>Your tip is: {tipValue}%</Result>
      <Result>Your total bill is: £{totalBill}</Result>
    </div>
  );
}

export default App;

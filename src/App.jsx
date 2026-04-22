import { useState } from "react";
import Calculator from "./components/Calculator";
import "./App.css"; 

function App() {
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [currency, setCurrency] = useState("usd");

  function convert() {
    if (real === "") return;
    setDolar(real / 5.25);
    setEuro(real / 6.15);
  }

  return (
    <div className="container">
      <h1>Conversor monetário</h1>

      <Calculator
        real={real}
        setReal={setReal}
        dolar={dolar}
        euro={euro}
        convert={convert}
        currency={currency}
        setCurrency={setCurrency}
        className="calculator"
      />
    </div>
  );
}

export default App;
import "./Calculator.css";

function Calculator({
  real,
  setReal,
  dolar,
  euro,
  convert,
  currency,
  setCurrency,
}) {
  return (
    <div className="calculator">
      <div className="input-group">
        <input
          type="number"
          placeholder="Digite o valor em real"
          value={real}
          onChange={(e) => setReal(e.target.value)}
        />

        <input
          type="radio"
          name="currency"
          value="usd"
          checked={currency === "usd"}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <label htmlFor="usd">Dólar</label>

        <input
          type="radio"
          name="currency"
          value="eur"
          checked={currency === "eur"}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <label htmlFor="eur">Euro</label>

        <button onClick={convert}>Converter</button>
      </div>

      <p>
        Valor convertido:{" "}
        {currency === "usd"
          ? dolar.toFixed(2) + " USD"
          : euro.toFixed(2) + " EUR"}
      </p>
    </div>
  );
}

export default Calculator;

import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);

  const [value, setValue] = useState([]);
  const handleState = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setValue(data.slice(0, amount));
  };

  return (
    <section className="section-center ">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label className="" htmlFor="amount">
          Paragraph
        </label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={handleState}
          id="amount"
          min={1}
          max={8}
          step={1}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {value.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </article>
    </section>
  );
};
export default App;

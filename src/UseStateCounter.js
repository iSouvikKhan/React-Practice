import React from "react";


const UseStateCounter = () => {

  const [value, setValue] = React.useState(100);
  const reset = () => {
    setValue(0)
  }

  return (
    <>
      <section>

        <h2>React Counter</h2>
        <h4>{value}</h4>

        <button className="btn" onClick={() => {
          setValue(value + 1);
        }}>Increase</button>

        <button className="btn" onClick={() => {
          setValue(value - 1)
        }}>Decrease</button>
        <button className="btn" onClick={reset}>Reset</button>

      </section>
    </>
  );

}

export default UseStateCounter;
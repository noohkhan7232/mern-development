import { useState } from "react";

function Comp13() {
  // let count = 0;

  const [count, setCount] = useState(0);

  function myfun() {
    // count = count + 1;
    // console.log(count);
    setCount(count + 1);
  }
  return (
    <>
      <h1 align="center">Component 13</h1>
      Count : {count} <br />
      <button onClick={myfun}>Increment</button>
    </>
  );
}

export default Comp13;

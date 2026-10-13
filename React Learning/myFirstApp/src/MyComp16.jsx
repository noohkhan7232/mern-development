import { useEffect, useState } from "react";

function Comp16() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Side Effect...");
  }, []);

  return (
    <>
      <h1 align="center">Component 16</h1>
      <hr color="navy" />
      Count : {count}
      <button onClick={() => setCount(count + 1)}> Button </button>
    </>
  );
}

export default Comp16;

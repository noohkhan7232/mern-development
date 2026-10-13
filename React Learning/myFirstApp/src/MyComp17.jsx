import { useEffect, useState } from "react";

function Comp17() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(500);

  
  
  useEffect(() => {
    console.log("Side Effect...");
  }, [count2]);

  return (
    <>
      <h1 align="center">Component 17</h1>
      <hr color="navy" />
      <fieldset>
        <legend>Count 1 Value</legend>
        Count1 : {count1} <br />
        <button onClick={() => setCount1(count1 + 1)}> Button 1 </button>
      </fieldset>

      <fieldset>
        <legend>Count 2 Value</legend>
        Count2 : {count2} <br />
        <button onClick={() => setCount2(count2 + 1)}> Button 2 </button>
      </fieldset>
    </>
  );
}

export default Comp17;

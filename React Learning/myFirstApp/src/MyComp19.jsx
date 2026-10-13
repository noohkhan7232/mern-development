import { createContext, useContext, useEffect, useState } from "react";

// 1)  Create Context
let MyContext = createContext();

function Comp19() {
  const userName = "Virat";
  const age = 45;
  return (
    <>
      <h1 align="center">Component 19</h1>
      <hr color="navy" />

      {/* 2) Provide Context */}
      <MyContext.Provider value={{ userName, age }}>
        <CompA />
      </MyContext.Provider>
    </>
  );
}
function CompA() {
  return (
    <>
      <h1 align="center">Component A</h1>
      <hr color="red" />
      <CompB />
    </>
  );
}
function CompB() {
  return (
    <>
      <h1 align="center">Component B</h1>
      <hr color="red" />
      <CompC />
    </>
  );
}
function CompC() {
  // 3) use Context
  let { userName, age } = useContext(MyContext);

  return (
    <>
      <h1 align="center">Component C</h1>
      <hr color="red" />
      {userName}
    </>
  );
}

export default Comp19;

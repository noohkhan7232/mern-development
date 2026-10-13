import { useEffect, useState } from "react";

// Props Drilling
function Comp18() {
  const userName = "Virat";
  return (
    <>
      <h1 align="center">Component 18</h1>
      <hr color="navy" />
      <CompA userName={userName} />
    </>
  );
}
function CompA({ userName }) {
  return (
    <>
      <h1 align="center">Component A</h1>
      <hr color="red" />
      <CompB userName={userName} />
    </>
  );
}
function CompB({ userName }) {
  return (
    <>
      <h1 align="center">Component B</h1>
      <hr color="red" />
      <CompC userName={userName} />
    </>
  );
}
function CompC({ userName }) {
  return (
    <>
      <h1 align="center">Component C</h1>
      <hr color="red" />
      {userName}
    </>
  );
}

export default Comp18;

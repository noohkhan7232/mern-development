function DemoComponent({ name, children }) {
  console.log(children);
  return (
    <>
      <h1 align="center">Demo Component</h1>
    </>
  );
}
function Comp11() {
  return (
    <>
      <h1 align="center">Component 11</h1>
      <DemoComponent name="Virat">
        <p>
          Lorem ipsum dolor sit amet.
          <button>Inside P</button>
        </p>
        <span> Span </span>
        <button></button>
      </DemoComponent>
    </>
  );
}

export default Comp11;

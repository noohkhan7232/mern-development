


// function DemoComponent(props)
function DemoComponent({ age, name }) {
  // console.log(props);
  return (
    <>
      <h1 align="center">Demo Component</h1>
      {/* {props.name}
      {props.age} */}
      {name}
      {age}
    </>
  );
}

function Comp9() {
  return (
    <>
      <h1 align="center">Component 9</h1>
      <DemoComponent name="Sachin" age={45} />
    </>
  );
}

export default Comp9;

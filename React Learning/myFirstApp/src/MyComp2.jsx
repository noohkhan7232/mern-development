import Comp3 from "./MyComp3";

function Comp2() {
  const myCss = {
    backgroundColor: "red",
    color: "yellow",
  };

  return (
    <>
      <h1 align="center">Component 2</h1>
      <p style={myCss}>Lorem ipsum dolor sit, amet consectetur</p>

      {/* {myCss} */}

      <Comp3 />
    </>
  );
}

export default Comp2;

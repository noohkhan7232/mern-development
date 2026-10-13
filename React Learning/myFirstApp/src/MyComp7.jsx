// a) if else
// b) ternery operator
// c) logical and(&&)

function Comp7() {
  let arr = ["Apple", "Mango", "Banana", "Grapes"];

  return (
    <>
      <h1 align="center">Component 7</h1>

      {arr.length > 0 &&
        arr.map((ele) => (
          <>
            <span>Span...</span>
          </>
        ))}

      {/* {arr.length > 0 && <p> {arr} </p>} */}
    </>
  );
}

export default Comp7;

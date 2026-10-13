// a) if else
// b) ternery operator
// c) logical and(&&)

import { useParams } from "react-router-dom";

function ValidFun() {
  return (
    <>
      <h1 style={{ lineHeight: "100px", backgroundColor: "lightgreen" }}>
        Valid
      </h1>
    </>
  );
}

function InValidFun() {
  return (
    <>
      <h1
        style={{ lineHeight: "100px", backgroundColor: "red", color: "white" }}
      >
        InValid
      </h1>
    </>
  );
}

function Comp5() {
  const isValid = false;
  let comp;

  // let params = useParams();
  // console.log(params);
  let { id, nm } = useParams();

  if (isValid) comp = <ValidFun />;
  else comp = <InValidFun />;

  return (
    <>
      <h1 align="center">Component 5</h1>
      {/* User ID : {params.id} */}
      User ID : {id} <br />
      User Name : {nm}
      {/* {comp} */}
    </>
  );
}

export default Comp5;

import { useContext } from "react";
import { GlobalContext } from "./Contexts/AppContext";

function Comp1() {
  let r = useContext(GlobalContext);
  return (
    <>
      <h1 align="center">My First Component 1</h1>;
      {r.userName}
    </>
  );
}

export default Comp1;

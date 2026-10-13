// a) if else
// b) ternery operator
// c) logical and(&&)

import { Outlet } from "react-router-dom";

function Comp6() {
  let isLoggedIn = false;

  return (
    <>
      {/* <h1 align="center">Component 6</h1> */}

      <h1 align="center">Department</h1>
      <Outlet />

      {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}
    </>
  );
}

export default Comp6;

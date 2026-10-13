// npm install react-router-dom -save

import { Routes, Route, Link } from "react-router-dom";
import Comp1 from "./MyComp1";
import Comp2 from "./MyComp2";
import Comp3 from "./MyComp3";
import Comp10 from "./MyComp10";
import Comp5 from "./MyComp5";
import Comp6 from "./MyComp6";
import Comp7 from "./MyComp7";
function Comp12() {
  return (
    <>
      <h1 align="center">Component 12</h1>
      {/* <Link to='route'> Text </Link>   */}
      <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>

      <Routes>
        {/* localhost:5173 */}
        <Route path="/" element={<Comp1 />} />
        {/* localhost:5173/home */}
        <Route path="/home" element={<Comp2 />} />
        <Route path="/about" element={<Comp3 />} />

        <Route path="/user" element={<Comp10 />} />

        {/* localhost:5173/user/1101 */}
        {/* localhost:5173/user/2001 */}
        {/* Dynamic Route */}
        <Route path="/user/:id" element={<Comp5 />} />
        <Route path="/user/:id/:nm" element={<Comp5 />} />

        <Route path="/department" element={<Comp6 />}>
          <Route path="cse" element={<Comp7 />} />
        </Route>
      </Routes>
    </>
  );
}

export default Comp12;

import { useState } from "react";

function Comp14() {
  const [formData, setFormData] = useState({});

  function inputfun(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function formSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // API Calling...
  }
  return (
    <>
      <h1 align="center">Component 14</h1>
      <hr color="navy" />
      <form onSubmit={(event) => formSubmit(event)}>
        <table className="table table-bordered w-75 mx-auto">
          <tbody>
            <tr>
              <td>Enter Name</td>
              <td>
                <input
                  type="text"
                  onChange={(event) => {
                    inputfun(event);
                  }}
                  name="unm"
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  onChange={(event) => {
                    inputfun(event);
                  }}
                  name="pwd"
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  onChange={(event) => {
                    inputfun(event);
                  }}
                  name="mailId"
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Comp14;

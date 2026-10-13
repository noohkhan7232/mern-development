import { useState } from "react";

function Comp15() {
  console.log("Component Rendered....");

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function loadUsers() {
    setIsLoading(true);
    setTimeout(() => {
      setUserData([
        { userName: "Sachin", userAge: 45, userSalary: 56000 },
        { userName: "Virat", userAge: 30, userSalary: 36000 },
        { userName: "Rahul", userAge: 45, userSalary: 50000 },
        { userName: "John", userAge: 45, userSalary: 23000 },
        { userName: "Smith", userAge: 45, userSalary: 40000 },
      ]);

      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      <h1 align="center">Component 15</h1>
      <hr color="navy" />
      <button onClick={loadUsers} disabled={isLoading}>
        {isLoading ? "Loading...." : "Load Users"}
      </button>

      {isLoading && <div className="spinner-border"></div>}

      {userData.length > 0 && (
        <table
          className="table 
                    table-bordered 
                    table-striped 
                    text-center "
        >
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Age</th>
              <th>User Salary</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr>
                <td>{user.userName} </td>
                <td>{user.userAge} </td>
                <td>{user.userSalary} </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Comp15;

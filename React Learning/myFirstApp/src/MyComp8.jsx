function Comp8() {
  let userData = [
    { userName: "Sachin", userAge: 45, userSalary: 56000 },
    { userName: "Virat", userAge: 30, userSalary: 36000 },
    { userName: "Rahul", userAge: 45, userSalary: 50000 },
    { userName: "John", userAge: 45, userSalary: 23000 },
    { userName: "Smith", userAge: 45, userSalary: 40000 },
  ];
  return (
    <>
      <h1 align="center">Component 8</h1>

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

export default Comp8;

import { Link } from "react-router-dom";

function MyCard({ user }) {
  return (
    <>
      <div className="card mx-auto" style={{ maxWidth: "300px" }}>
        <div className="card-header">{user.userName}</div>

        <img src="./avatar.png" className="card-img-top img-thumbnail" />

        <div className="card-body">
          User Age : {user.userAge} <br />
          Salary : {user.userSalary}
        </div>
        <div className="card-footer">
          <Link to={`/user/${user.userId}`} className="btn btn-info btn-block">
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

function Comp10() {
  let userData = [
    { userId: 1001, userName: "Sachin", userAge: 45, userSalary: 56000 },
    { userId: 1002, userName: "Virat", userAge: 30, userSalary: 36000 },
    { userId: 1003, userName: "Rahul", userAge: 45, userSalary: 50000 },
    { userId: 1004, userName: "John", userAge: 45, userSalary: 23000 },
    { userId: 1005, userName: "Smith", userAge: 45, userSalary: 40000 },
  ];
  return (
    <>
      <h1 align="center">Component 8</h1>
      {userData.length > 0 && (
        <div className="row">
          {userData.map((user) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
              <MyCard user={user} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Comp10;

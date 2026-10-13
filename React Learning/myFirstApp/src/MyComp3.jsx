function Comp3() {
  let name = "Sachin";
  let friendsList = ["Sachin", "Virat", "Rahul", "Rohit"];

  let arr = [];
  friendsList.forEach((name) => {
    arr.push(<li>{name}</li>);
  });

  return (
    <>
      <h1 align="center">Component 3</h1>
      <p>Lorem ipsum dolor sit, amet consectetur</p>
      <h3 align="center">Welcome {name}</h3>
      <p>{friendsList}</p>
      <p>{friendsList[0]}</p>
      <ul>{arr}</ul>
    </>
  );
}

export default Comp3;

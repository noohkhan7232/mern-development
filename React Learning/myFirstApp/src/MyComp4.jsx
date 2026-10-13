function Comp4() {
  function btnClick() {
    alert("Hello...");
  }

  function btnClick2(name) {
    alert(name);
  }

  
  function myChkfun(event) {
    alert(event.target.checked);
  }
  return (
    <>
      <h1 align="center">Component 4</h1>
      <button className="btn btn-info" onClick={btnClick}>
        Button
      </button>

      <button onClick={() => btnClick2("Virat")}>Button 2</button>

      <input type="checkbox" onChange={(event) => myChkfun(event)} />

      <p className="alert alert-primary mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        incidunt cum modi impedit iure rerum, nemo maiores? Cumque, sequi cum
        voluptatum quod, enim magnam necessitatibus officia animi consequuntur
        quibusdam nemo.
      </p>
    </>
  );
}

export default Comp4;

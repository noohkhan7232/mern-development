function myAdd(a,b)
{
  return (a+b)
}

function mySub(a,b)
{
  return (a-b)
}

function calculate(a,b , fn)
{
  return (fn(a,b))
}

let r = calculate(5,6,myAdd)
console.log(r);

r = calculate(5,6,mySub)
console.log(r);



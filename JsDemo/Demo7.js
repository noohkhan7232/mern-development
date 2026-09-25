


function calc_int(amt=5000, rate, time=1)
{
  console.log("Amount : "+amt);
  console.log("Rate   : "+rate);
  console.log("time   : "+time);
  
  return (amt*rate*time)/100  
}

console.log(calc_int(5000,5,1));
console.log(calc_int(5000,5,3));
console.log(calc_int(5));







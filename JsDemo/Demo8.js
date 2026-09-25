


function myfun()
{
  console.log("Fun Calling...");  
}

myfun()

let fn = function()
{
  console.log("Anonymous Function...");  
}
fn()

fn = ()=>{
  console.log("Arrow Function...");  
}
fn()

fn = (num)=> num**3
console.log(fn(5))

fn = num => num**5
console.log(fn(5))

fn = (num1,num2) => { return num1*num2 } 
console.log(fn(5,10))










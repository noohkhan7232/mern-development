let a = 5
let b = "10"

// console.log(a == b); // 
// console.log(a === b);

// let r = (a > b) ? console.log("A is Greater") :console.log("B is Greater")
// console.log(r);

// console.log(typeof a);
// console.log(typeof b);

// let arr = [5,6,7,8,9]

// console.log(typeof arr);
// console.log(arr instanceof Object);
// console.log(arr instanceof Array);

let i,j,flag = true;

for(i = 0 ; i < 5 && flag ; i++ )
{
  for(j=0;j<5;j++)
  {
    if(j==2)
    {
      flag = false
      break
    }      
    console.log(j);    
  }
}  



// for(i=0, j=10 ; i<5 , j>8 ; i++,j-- )
// {
//   console.log("I="+i," J="+j)
// }









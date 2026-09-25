



// let arr = [7,3,5,9,1]
// let r = arr.sort()

let arr = [40, 1, 30 , 25 , 6]

// Ascending order Sort
// let r = [...arr].sort((a,b)=>a-b) 

// Descending order Sort
let r = [...arr].sort((a,b)=>b-a)
// console.log(arr);
// console.log(r);

// let userNames = ["Sachin","Rahul","Yuvi","John","Laxman"]

// r = userNames.sort((a,b)=>a.localeCompare(b))
// console.log(r);

const productDetails = [
  {proId:1201, proName:'iMac',proPriceD:899},
  {proId:1306, proName:'MacBook',proPriceD:1199},
  {proId:1006, proName:'iPad',proPriceD:799},
  {proId:1461, proName:'earPods',proPriceD:599},
]

r = [...productDetails].sort((a,b)=>a.proPriceD - b.proPriceD) 
console.table(r);

r = [...productDetails].sort((a,b)=>a.proName.localeCompare(b.proName)) 
console.table(r);

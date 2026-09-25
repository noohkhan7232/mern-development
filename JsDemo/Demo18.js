



let arr = [1,2,3,4,5,6,7,8,9]
let value = 6

r = arr.find((ele)=> ele === value )
console.log(r);

const productDetails = [
  {proId:1201, proName:'iMac',   proPriceD:899 , proQty:3},
  {proId:1306, proName:'MacBook',proPriceD:1199, proQty:5},
  {proId:1006, proName:'iPad',   proPriceD:799 , proQty:8},
  {proId:1461, proName:'earPods',proPriceD:599 , proQty:10},
]

r = productDetails.find((product)=> product.proName === "iPad" )
console.log(r);


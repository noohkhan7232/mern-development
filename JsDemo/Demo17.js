




const productDetails = [
  {proId:1201, proName:'iMac',   proPriceD:899 , proQty:3},
  {proId:1306, proName:'MacBook',proPriceD:1199, proQty:5},
  {proId:1006, proName:'iPad',   proPriceD:799 , proQty:8},
  {proId:1461, proName:'earPods',proPriceD:599 , proQty:10},
]

r = [...productDetails].reduce((finalAmount , product)=>{
  return finalAmount+ (product.proPriceD*product.proQty)
} , 0 )

console.log(r);

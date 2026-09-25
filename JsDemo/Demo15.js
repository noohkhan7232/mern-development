


const productDetails = [
  {proId:1201, proName:'iMac',proPriceD:899},
  {proId:1306, proName:'MacBook',proPriceD:1199},
  {proId:1006, proName:'iPad',proPriceD:799},
  {proId:1461, proName:'earPods',proPriceD:599},
]

const d = 95
const r = productDetails.map((product)=>{
  return {...product , proPriceR :product.proPriceD*d}
})
console.log(r);

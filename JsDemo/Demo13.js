


let arr = [1,2,3,4,5]

let filteredEle = arr.filter((ele)=>{
  if (ele%2 == 0)
    return true
})
console.log(filteredEle);

const userData = [
  {userName:'Sachin', userAge:45, userSalary:56000},
  {userName:'Virat',  userAge:45, userSalary:34000},
  {userName:'Saurabh',userAge:45, userSalary:10000},
  {userName:'Yuvi',   userAge:45, userSalary:51000},
  {userName:'Rahul',  userAge:45, userSalary:36000},
]
let r = userData.filter((user)=>{
    if(user.userSalary>=50000)
      return true
})

console.log(r);

// NST

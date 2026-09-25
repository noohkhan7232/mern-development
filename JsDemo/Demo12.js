const transations = [
  {type:'deposite', amount:1000},
  {type:'withdraw', amount:200},
  {type:'deposite', amount:500},
  {type:'withdraw', amount:300},
]

let balance= 0;
transations.forEach(( transation )=>{

  if(transation.type === "withdraw")
    balance -= transation.amount;
  else if(transation.type === 'deposite')
    balance += transation.amount

  console.log(transation.type  + 
              " amount of Rs." + transation.amount +
              " Balance : Rs." +
              balance
  ) 
})

console.log("Final Balance : Rs."+balance);






// const userData = [
//   {userName:'Sachin', userAge:45, userSalary:56000},
//   {userName:'Virat',  userAge:45, userSalary:34000},
//   {userName:'Saurabh',userAge:45, userSalary:10000},
//   {userName:'Yuvi',   userAge:45, userSalary:51000},
//   {userName:'Rahul',  userAge:45, userSalary:36000},
// ]

// userData.forEach((user)=>{
//     console.log("Name  : " + user.userName);
//     console.log("Age   : " + user.userAge);
//     console.log("Salary: "+ user.userSalary);    
// })
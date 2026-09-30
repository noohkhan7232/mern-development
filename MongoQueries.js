// show databases;
// show dbs
// use Allen_Batch_B_DB
// show collections
db.createCollection("students")


db.students.insertOne({
                        userName:"Virat",
                        userAge:45,
                        userEmail:'kohli@gmail.com'
                      })


db.students.insertOne({
                        stuName:"Sachin",
                        stuAge:52,
                        stuEmail:'sachin@gmail.com',
                        stuMarks:800
                      })

// To show all records
db.students.find()                      


db.students.insertMany([
                          {
                            stuName:"Virat",
                            stuAge:19,
                            stuEmail:'kohli@gmail.com',
                            stuMarks:900
                          } , 
                          {
                            stuName:"John",
                            stuAge:18,
                            stuEmail:'john@gmail.com',
                            stuMarks:780,
                            stuSubjects:["Maths","Phy","Chem"]
                          } ,
                          {
                            stuName:"John",
                            stuAge:18,
                            stuEmail:'john@gmail.com',
                            stuMarks:780,
                            stuSubjects:["Maths","Phy","Chem"],
                            stuSubMarks:[89,90,78]
                          }
                        ])

                        
db.students.insertOne({
                            stuName:"Yuvi",
                            stuAge:18,
                            stuEmail:'singh@gmail.com',
                            stuMarks:880,
                            stuSubjects:["Maths","Phy","Chem"],
                            stuAddress:{
                              houseNo:420,
                              city:'Mohali',
                              pin:209020
                            }  
                    })                        

 db.products.insertOne({
                            proName:"Kitkat",
                            proprice:20,
                            proCompany:'Nestle',                                                        
                    })  
                    

 // Inculsion(To include fields)
db.students.find({} ,{stuName:1,stuEmail:1})
db.students.find({} ,{stuName:1,stuEmail:1,_id:0})

// Exculsion(To exclude fields)
db.students.find({} , { stuEmail:0,stuAge:0 })

// Error : Cannot do inclusion on field stuName in exclusion projection
db.students.find({} , { stuEmail:0,stuAge:0,stuName:1 })


// Filter(Conditions to filter record)
db.students.find({stuName:'Yuvi'})
db.students.find({stuName:{$eq:'Yuvi'}})
db.students.find({stuName:{$in:['Sachin',"john","Ria","Steve"]}})

db.students.find({stuAge:{$gte:19}})

// db.students.find({$and:[{} ,{}]})
db.students.find({$and:[
                        {stuName:{$eq:"Virat"}},
                        {stuAge:{$gte:19}}
                       ]
                 })
db.students.find({$or:[
                        {stuName:{$eq:"Virat"}},
                        {stuAge:{$gte:19}}
                       ]
                 })
db.students.find({$and:[
                        {stuAge:{$gte:18}},
                        {stuAge:{$lte:20}}
                      ]})

db.students.find({$and:[
                        {stuName:{$eq:'John'}},
                        {stuAge:{$not:{$gt:18}}}
                      ]})                 


db.students.find({stuMarks:{$exists:true}})
db.students.find({stuAddress:{$exists:true}})

db.students.find({$and:[
                        {stuMarks:{$exists:true}},
                        {stuMarks:{$gte:850}}
                       ]
                  })
db.students.find({$and:[
                        {stuMarks:{$exists:true}},
                        {stuMarks:{$type:"double"}},
                        {stuMarks:{$gte:850}}
                       ]
                  })                  


db.DemoCollection.insertOne({
  name:'User1',
  password:'Pass@123',
  email:'demo@mail.com'
})                  


db.students.find({ stuName:"Yuvi" })
db.students.find({ stuAge:17 })
db.students.find({ stuAge:{$gt:18} })
db.students.find({ stuAge:{$gte:18} })
db.students.find({ stuAge:{$lt:18} })
db.students.find({ stuAge:{$lte:18} })
db.students.find({ stuAge:{$eq:18} })
db.students.find({ stuAge:{$ne:18} })

db.students.find({$and:[{stuAge:{$gte:20}},{stuAge:{$lte:60}}]})
db.students.find({$or:[{stuAge:{$gte:20}},{stuAge:{$lte:60}}]})


db.students.updateOne({stuName: "Yuvi"},{$set:{stuAge:19}})

db.students.updateOne(
                      {stuName: "Yuvi"},
                      {$set:{stuAge:20,stuMarks:900}}
                    )

db.students.updateMany({stuName:{$in:["Virat","Sachin"]}},
                       {$set:{stuAge:20,stuMarks:990}})                    

db.students.updateMany({stuName:"Saad"},
                       {$set:{stuAge:20,stuMarks:990}},
                       {upsert:true})                    

db.students.updateMany({userName:"Virat"},
                       {$unset:{userAge:""}}
                       )                    

db.students.deleteOne({userName:"Virat"})    



db.Employees.insertMany([
  {
    "_id": 1,
    "name": "John Doe",
    "age": 28,
    "hobbies": ["Reading", "Swimming", "Cycling"],
    "about": "I am a software engineer who loves coding."
  },
  {
    "_id": 2,
    "name": "Emily Smith",
    "age": 32,
    "hobbies": ["Dancing", "Traveling", "Cooking"],
    "about": "Travel blogger and food enthusiast."
  },
  {
    "_id": 3,
    "name": "Michael Johnson",
    "age": 40,
    "hobbies": ["Photography", "Gardening", "Reading"],
    "about": "Passionate about nature and photography."
  },
  {
    "_id": 4,
    "name": "Sophia Brown",
    "age": 25,
    "hobbies": ["Music", "Drawing", "Gaming"],
    "about": "Aspiring artist who enjoys music and sketching."
  },
  {
    "_id": 5,
    "name": "David Wilson",
    "age": 36,
    "hobbies": ["Boxing", "Swimming", "Hiking"],
    "about": "Fitness trainer and outdoor explorer."
  }
])


db.Employees.find({about:"Fitness trainer"})
db.Employees.find({about:"Fitness trainer and outdoor explorer."})

db.Employees.find({about:"trainer"})
// Output : No Records

// Case sensitive comparision
db.Employees.find({about:/trainer/})
// Output : Records, which contains 'trainer'

db.Employees.find({about:/software engineer/})
// Output : Records, which contains 'trainer'

db.Employees.find({about:/and/})

db.Employees.find({about:/And/})
// Output:No output, 

// Case in-sensitive comparision(/ /i)
db.Employees.find({about:/And/i})

db.Employees.find({name:/M/i})

// String starts with '^'
db.Employees.find({name:/^M/i})

// String ends with '$'
db.Employees.find({name:/n$/i})

db.Employees.find({name:/.{3}a/})

db.Employees.find({name:/^.{3}h/})

db.Employees.find({name:/^.{3}h/})

db.Employees.find({name:/o.{1}$/})

db.students.find().count()

db.students.find().limit(3)
db.students.find().sort({stuName:1,stuAge:-1})


// Date()  - String
// new Date() - Date Object
// new ISODate() - Date Object

db.DatesCollection.insertMany(
          [
            {
              aboutDate:"Date using 'Date()'",
              insertedAt:Date()
            },
            {
              aboutDate:"Date using 'new Date()'",
              insertedAt:new Date()
            },
            {
              aboutDate:"Date using 'new ISODate()'",
              insertedAt:new ISODate()
            }

          ]
        )


// Error: caused by :: can't convert from BSON type string to Date        
db.DatesCollection.find({insertedAt:{$type:'date'}},
                        {
                          RegistrationDate:
                          {
                            $dateToString:
                            {
                              date:"$insertedAt" ,
                              format:"%d-%B-%Y %H:%M:%S",
                              timezone:"Asia/Kolkata"
                            }
                          }
                        })  
                              
db.DatesCollection.find({insertedAt:{$type:'date'}},
                        {
                          RegistrationDate:
                          {
                            $dateToString:
                            {
                              date:"$insertedAt" ,
                              format:"%d-%B-%Y %H:%M:%S",
                              timezone:"+05:30"
                            }
                          }
                        })        




/* ----- Dataset for Aggregation -----*/
db.aggCollection.insertMany([
    { 
        _id:1,
        firstName: "John",
        lastName: "King",
        gender:'male',
        email: "john.king@abc.com",
        salary: 5000,
        department: { 
                    "name":"HR" 
                }
    },
    { 
        _id:2,
        firstName: "Sachin",
        lastName: "Tendulkar",
        gender:'male',
        email: "sachin.t@abc.com",
        salary: 8000,
        department: { 
                    "name":"Finance" 
                }
    },
    { 
        _id:3,
        firstName: "Virat",
        lastName: "kohli",
        gender:'male',
        email: "kohli@abc.com",
        salary: 7500,
        department: { 
                    "name":"Marketing" 
                }
    },
    { 
        _id:4,
        firstName: "Rohini",
        lastName: "Sharma",
        gender:'female',
        email: "roh@abc.com",
        salary: 5000, 
        department: { 
                    "name":"HR" 
                }

    },
    { 
        _id:5,
        firstName: "Kapil",
        lastName: "Dev",
        gender:'male',
        email: "kapil.d@abc.com",
        salary: 4500,
        department: { 
                    "name":"Finance" 
                }

    },
    { 
        _id:6,
        firstName: "Amit",
        lastName: "B",
        gender:'male',
        email: "amit.b@abc.com",
        salary: 7000,
        department: { 
                    "name":"Marketing" 
                }
    }
])                       


db.aggCollection.aggregate([
  {
     $match:{gender:'female'} 
  },
  {
    $project:{firstName:1,gender:1,email:1}
  }
])

db.aggCollection.aggregate([
  {
     $match:{salary:{$gt:5000}} 
  },
  {
    $project:{firstName:1,salary:1,email:1}
  }
])

db.aggCollection.aggregate([
  {
     $match:{$and:
               [
                 {salary:{$gt:5000}},
                 {salary:{$lt:7000}}
                ]
              } 
  },
  {
    $project:{firstName:1,salary:1,email:1}
  }
])

db.aggCollection.aggregate([ 
                              {
                                $group:{_id:"$gender"}
                              }
                            ])

db.aggCollection.aggregate([ 
                              {
                                $group:{
                                  _id:"$department.name",
                                  TotalEmployees:{$sum:1},
                                  TotalSalary   : {$sum:'$salary'},
                                  MaximumSalary : {$max:'$salary'},
                                  MinimumSalary : {$min:'$salary'},
                                  AverageSalary : {$avg:'$salary'},
                                }
                              },
                              {
                                $sort:{
                                        TotalSalary:-1,
                                        AverageSalary:-1
                                    }
                              },
                              {
                                $limit:2
                              },
                              {
                                $skip:1
                              },
                              {
                                $sample:{size:1}
                              }
                            ])

db.aggCollection.aggregate([ 
                              {
                                $group:{
                                  _id:"$department.name",
                                  TotalEmployees:{$sum:1},
                                  TotalSalary   : {$sum:'$salary'},
                                  MaximumSalary : {$max:'$salary'},
                                  MinimumSalary : {$min:'$salary'},
                                  AverageSalary : {$avg:'$salary'},
                                }
                              },
                              {
                                $sort:{
                                        TotalSalary:-1,
                                        AverageSalary:-1
                                    }
                              },                              
                              {
                                $sample:{size:1}
                              }
                            ])

db.aggCollection.aggregate([
                              {
                                  $sortByCount:'$department.name'
                              }
                            ])                            


// ************** Dataset for $unwind ****************

db.trainers.insertMany([
{
    trainerId: 101,
    trainerName: "John",
    department: "MERN",
    skills: ["C", "JavaScript", "MongoDB", "React"],
    students: [
        { name: "Ali", age: 20, marks: 85 },
        { name: "Sara", age: 22, marks: 91 },
        { name: "John", age: 19, marks: 78 }
    ]
},
{
    trainerId: 102,
    trainerName: "Amit",
    department: "Python",
    skills: ["Python", "Django", "SQL"],
    students: [
        { name: "Priya", age: 21, marks: 88 },
        { name: "Rohan", age: 23, marks: 75 }
    ]
},
{
    trainerId: 103,
    trainerName: "Neha",
    department: "Java",
    skills: ["Java", "Spring Boot", "MySQL"],
    students: [
        { name: "Ankit", age: 24, marks: 82 },
        { name: "Simran", age: 20, marks: 95 }
    ]
}
]);   


db.trainers.aggregate([
  {
    $unwind:"$skills"
  },
  {
    $project:
    {
      trainerName:1,
      skills:1,
      _id:0

    }
  }
])
                            

db.trainers.aggregate([
        {
            $unwind:'$students' 
        },
        {
          $match:{
            "students.marks":{$gt:85}
          }
        },
        {
          $project:{
                trainerName:1,
                student:"$students.name",
                marks:"$students.marks",
                _id:0
              }
        }
])

db.trainers.aggregate([
  {
      $unwind:'$skills'
  },
  {
    $group:{
      _id:"$skills",
      TotalTrainers:{$sum:1}
    }
  }
])



db.employee.insertOne({
        id: 1,
        name : "John",
        skills: ["C","C++" ,"JavaScript", "Node.js"],
        marks: [75, 80, 90],
        students: [
          {
            name: "Ali",
            age: 20            
          },
          {
            name: "Sara",
            age: 21,
            email:'sara@mail.com'
          }
        ]
 })


 db.employee.find({skills:"JavaScript"})
 
  db.employee.find({skills:{$in:["JavaScript","Python","C++"]}})
  
  db.employee.find({skills:{$all:["JavaScript","Python","C++"]}})

  db.employee.find({
    "students.name":"Ali"
  })
  
  db.employee.find({
    "students.age":{$gt:20}
  })
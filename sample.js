
// const fruits= ["Apple", "Banana", "Mango", "Orange", "Graphs"];

// fruits.map((ele)=>{
//   console.log(ele)
// })
//  fruits.filter((e)=>{
//     if(e === "Apple"){
//          console.log(e)
//     }

//  })


//  function sample(a,b){

//    return (a+b);
//  }

// sample(10,20);

// sample(30,40);

// sample(100,200);

// let count = 0;
// const Timer = setInterval(() => {
//   console.log("Timer running", count++);

//   if (count === 5) {
//     clearInterval(Timer);
//   }
// }, 1000)


const employees = [
  { id: 1, name: "harsha", age: "22", "salary": 10000 },
  { id: 2, name: "koushik", age: "22", "salary": 10000 },
  { id: 3, name: "deepika", age: "22", "salary": 10000 },
  { id: 4, name: "gangiReddy", age: "22", "salary": 10000 }
]
const filteredEmployee = employees.filter((emp) => {
  console.log(emp.id, emp.id !== 4)
  return emp.id !== 4});

console.log(filteredEmployee)




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

let count = 0;
const Timer = setInterval(() => {
  console.log("Timer running", count++);

  if (count === 5) {
    clearInterval(Timer);
  }
}, 1000)



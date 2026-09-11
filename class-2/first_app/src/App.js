import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Student from './components/Student';
import Counter from './components/Counter';
import InputState from './components/InputState';


function App() {

  let obj = { name: "Sudheer", age: "22", education: "Mtech" }

  let names = ["Koushik","Deepika","Aravind","Harsha","Aravind"];

  let studenObjArray=[{ name: "Sudheer", age: "22", education: "Mtech" }]

  return (
    <div className="App">

      {/* <h1>Sudheer</h1>
      <h1>Bhargava</h1>
      <input type="text" />
      <button>Submit</button> */}

      {/* <Greeting Details={obj} location="anathapur"/> */}
      {/* <Greeting name="sudheer" age={22} education="Btech" salary={20000} />
      <Greeting name="deepika" age={21} education="MCA" salary={20000}/>
      <Greeting name="Harsha" age={23} education="Btch" salary={20000}/>
      <Greeting name="koushik" age={22} education="Btech" salary={20000}/> */}
     
     {/* <Student name="Koushik" names={names}/> */}

     {/* <Counter /> */}

     <InputState />
     
    </div>
  );

}

export default App;

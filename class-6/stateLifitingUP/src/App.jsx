import { useState } from "react";
import './App.css'
import Counter from './components/Counter'
import Display from "./components/Display";
import Input from "./components/Input";
import Preview from "./components/Preview";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <Counter count={count} setCount={setCount} />
      
      <Input name={name} setName={setName}/>
      <Preview name={name} />
      <Display count={count} name={name}/>
    </>
  )
}

export default App

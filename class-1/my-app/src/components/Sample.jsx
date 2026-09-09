import { useState } from 'react';

function Sample() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  // let name="harsha";

  return (
    <div className="App">
      <input
        type="text"
        placeholder='Enter your name'
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <h1>Name: {name}</h1>
      <br />
      <input
        type="text"
        placeholder='Enter your phone number'
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <h1>Phone: {phone}</h1>
    </div>
  );
}

export default Sample;




import { useState } from "react";

function LocalStorage() {
    const [name, SetName] = useState("")

    const saveLocalStorage =()=>{
        localStorage.setItem("username",name);
        localStorage.setItem("city","Hindupur");
        localStorage.setItem("age",25)
        // alert("Saved to local storage")
    }

    const getLocalStorage =()=>{
        const value=localStorage.getItem("username");

        alert(value)
    }

    const removeLocalStorage =()=>{
        localStorage.removeItem("age")
        localStorage.removeItem("city")
        
    }

    const clearLocalStorage =()=>{
        localStorage.clear()
        
    }

    return (
        <>
            <h2>LocalStorage component</h2>
            <label>Name: </label>
            <input type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>{
                SetName(e.target.value)
            }} />
            <h2>Display name: {name}</h2>

            <button onClick={saveLocalStorage}>Save Local Storage</button>
            <button onClick={getLocalStorage}>Get Local Storage</button>
            <button onClick={removeLocalStorage}>Remove Local Storage</button>
            <button onClick={clearLocalStorage}>Clear Local Storage</button>
        </>
    )
}

export default LocalStorage;
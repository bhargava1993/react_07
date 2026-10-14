import { useState } from "react";

function SessionStorage() {
    const [name, SetName] = useState("")

    const saveSessionStorage =()=>{
        sessionStorage.setItem("username",name);
        sessionStorage.setItem("city","Hindupur");
        sessionStorage.setItem("age",25)
        // alert("Saved to Session storage")
    }

    const getSessionStorage =()=>{
        const value=sessionStorage.getItem("username");

        alert(value)
    }

    const removeSessionStorage =()=>{
        sessionStorage.removeItem("age")
        sessionStorage.removeItem("city")
        
    }

    const clearSessionStorage =()=>{
        sessionStorage.clear()
        
    }

    return (
        <>
            <h2>SessionStorage component</h2>
            <label>Name: </label>
            <input type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>{
                SetName(e.target.value)
            }} />
            <h2>Display name: {name}</h2>

            <button onClick={saveSessionStorage}>Save Session Storage</button>
            <button onClick={getSessionStorage}>Get Session Storage</button>
            <button onClick={removeSessionStorage}>Remove Session Storage</button>
            <button onClick={clearSessionStorage}>Clear Session Storage</button>
        </>
    )
}

export default SessionStorage;
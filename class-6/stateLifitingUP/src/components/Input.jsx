import { useState } from "react"
import Display from "./Display";

function Input({ name, setName }) {

    return (
        <>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name" />
            
        </>
    )
}

export default Input;
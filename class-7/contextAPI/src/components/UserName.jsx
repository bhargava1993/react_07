import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

export default function UserName() {
    const {username} = useContext(UserContext)

    return (
        <div style={{ padding: "20px", border: "2px solid black" }}>
            <h3>UserName component</h3>
            <p> Welcome: {username}</p>
        </div>
    );
}
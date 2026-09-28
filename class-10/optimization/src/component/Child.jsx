import React from "react";

const Child = React.memo(
    function Child( user ) {
        console.log("Child Component",user)
        return (
            <>
                <h2>Child compoenent</h2>
                <h3>Hello: {user.name.firstname}</h3>
            </>
        );
    }
)




export default Child;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
                console.log(user);
            });
    }, [id]);

     useEffect(() => {
        console.log("Updated user:", user);
    }, [user]);

    return (
        <>
            <h1>User Component</h1>
           
            {user && (
                <div>
                    <h2>
                       Name: {user.firstName} {user.lastName}
                    </h2>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                </div>
            )}

        </>
    )
}
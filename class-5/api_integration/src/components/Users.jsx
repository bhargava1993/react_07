import axios from "axios";
import { useEffect, useState } from "react";
import "./Users.css";
import { fetchUsers } from "../service/userService";


function Users() {
    const [users, setUsers] = useState({});

    useEffect(() => {

        const getUsers = async () => {

            try {

                const response = await fetchUsers();

                // const url = "https://dummyjson.com/users";

                // const url = "https://dummyjson.com/users";
                // const params={
                //     "skip":60
                // }

                // const response = await axiosInstance("/users",{params:params});

                // const response = await axios.get(url,
                //     {params:params}
                // );

                // const url = "https://dummyjson.com/users";
                // const params={
                //     "skip":60
                // }

                // const response = await axios.post(url,
                //     {params:params},
                //     {"name":"bhargav","age":32}
                // );

                //   console.log(response)
                //   console.log(response.data)
                //   console.log(response.data.users.length)
                if (response.status === 200 && response.data.users.length > 0) {

                    setUsers(response.data);

                } else {
                    console.log("No data found")
                }

            } catch (error) {
                console.log("getUsers fn error:", error);
            }

        }

        getUsers();

    }, []);

    // useEffect(() => { 
    //     console.log("users state updated:", users); 
    // }, [users])

    return (
        <>
            <h1>User Component</h1>
            {users.users && users.users.map((user) => (
                <div key={user.id} className="container">
                    <p>
                        <strong>Id:</strong> {user.id}
                    </p>
                    <p>
                        <strong>Name:</strong> {user.firstName}
                    </p>

                    <p>
                        <strong>Gender:</strong> {user.gender}
                    </p>

                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>

                    <p>
                        <strong>Age:</strong> {user.age}
                    </p>
                </div>

            ))
            }

        </>
    )
}

export default Users;
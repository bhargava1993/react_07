import axiosInstance from "./axiosInstance";

export const fetchUsers = ()=>{
    return axiosInstance.get("/users");
}

export const createUsers = (params)=>{
    return axiosInstance.post("/users",parmas);
}

export const updateUsers = ()=>{
    return axiosInstance.put("/users");
}

export const deleteUsers = ()=>{
    return axiosInstance.delete("/users");
}



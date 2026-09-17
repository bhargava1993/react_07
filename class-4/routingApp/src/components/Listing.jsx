import {useParams} from "react-router-dom";

export default function Listing(){
    const params = useParams();
    console.log("params----",params)
    return(
        <h1>Listing Component: {params.id}</h1>
    );
}
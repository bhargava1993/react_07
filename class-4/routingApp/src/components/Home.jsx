import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <a href="https://www.google.com" target="_blank">google</a>
            <h1>Home component</h1>

            <nav>
                <Link to="/home">Home</Link>
                <br></br>
                <br></br>
                <Link to="/about">About</Link>
                <br></br>
                <br></br>
                <Link to="/login">Login</Link>
                <br></br>
                <br></br>
            </nav>
        </>

    );
}
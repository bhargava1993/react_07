import UserName from "./UserName";

export default function UserCard() {
    return (
        <div style={{ padding: "20px", border: "2px solid black" }}>
            <h3>UserCard component</h3>
            <UserName />
        </div>
    );
}
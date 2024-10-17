import { useEffect, useState } from "react"
import './Users.css'
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="box">
            <p>Users length: {users.length}</p>
            {
                users.map(user => <User userData={user} key={user.id}></User>)
            }
        </div>
    )
}
export default function User({userData={}}) {
    // console.log(userData)
    const {name, username, email, address={}} = userData
    // const {name, username, email, address} = userData || {} // eita dile empty object declare na korleo chole
    return (
        <div className="box">
            <p>Name: {name}</p>
            <p>User Name: {username}</p>
            <p>E-mail: {email}</p>
            <p>City: {address.city}</p>
        </div>
    )
}
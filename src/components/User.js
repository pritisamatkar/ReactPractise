const User = ({name,location}) =>{
    return (
    <div className="userCard">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
    </div>
    )
}

export default User;

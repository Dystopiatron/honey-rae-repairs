import "../users/user.css"

export const User = ({user}) => {
    return (
        <div className="user">
            <div className="user-info" >Name</div>
            <div>{user.fullName}</div>
            <div>
                <div className="user-info" >Email</div>
                <div>{user.email}</div>
            </div>
        </div>
    );
}
import './NewUserCard.css'

export default function NewUserCard({newUser}){
    return(
        <div className='UsersCard'>
            <img src='https://img.freepik.com/free-icon/user_318-159711.jpg'/>
            <div>
                <h3>{newUser.name}</h3>
                <span>Users ID: {newUser.id}</span> <br/>
                <span>Email: {newUser.contact.email}</span>
            </div>
        </div>
    )
}
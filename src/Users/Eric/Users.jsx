import PropTypes from "prop-types";
import './Users.css'
import userImg from './userImg.png'

export default function Users({ users }){
    return(
        <section>
            {users.map(user => {
                return(
                    <div key={user.id} className="userCard">
                        <img src={userImg}/>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </section>
    )
}

Users.PropTypes = {
    users: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                address: PropTypes.exact(
                    {
                        street: PropTypes.string.isRequired,
                        suite: PropTypes.string.isRequired,
                        city: PropTypes.string.isRequired,
                        zipcode: PropTypes.string.isRequired,
                        geo: PropTypes.exact(
                            {
                                lat: PropTypes.string.isRequired,
                                lng: PropTypes.string.isRequired
                            }
                        )
                    }
                ),
                phone: PropTypes.string.isRequired,
                website: PropTypes.string.isRequired,
                company: PropTypes.exact(
                    {
                        name: PropTypes.string.isRequired,
                        catchPhrase: PropTypes.string.isRequired,
                        bs: PropTypes.string.isRequired
                    }
                )

            }
        )
    )
}
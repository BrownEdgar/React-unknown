import React from 'react'
import PropTypes from 'prop-types'

function Component({ data }) {
    return (
      <ul className='user_div'>
        {data.map((elem) => {
          return (
            <li key={elem.id} className='card'>
              <p>Name : <span className='name'>{elem.name}</span></p>
              <p>Username : <span className='username'>{elem.username}</span></p>
              <p>Email : <span className='email'>{elem.email}</span></p>
            </li>
          );
        })}
      </ul>
    );
  }

Component.propTypes = {
    data: PropTypes.arrayOf(
       PropTypes.exact(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            address : PropTypes.exact(
                {
                    street: PropTypes.string.isRequired,
                    suite: PropTypes.string.isRequired,
                    city: PropTypes.string.isRequired,
                    zipcode: PropTypes.string.isRequired,
                    geo: PropTypes.exact(
                        {
                            lat: PropTypes.string.isRequired,
                            lng: PropTypes.string.isRequired,
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
                    bs: PropTypes.string.isRequired,
                }
            )
        }
       )
    )
}

export default Component
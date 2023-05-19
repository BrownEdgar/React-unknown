import React from 'react';
import PropTypes from 'prop-types';

export default function UsersList({ data }) {
  return (
    <div className='card-list'>
      {data.map(elem => (
        <div className='card' key={elem.id}>
          <h1 className='card-title'>{elem.company.name}</h1>
          <ul>
            <li>ID: {elem.id}</li>
            <li>Name: {elem.name}</li>
            <li>Username: {elem.username}</li>
            <li>City: {elem.address.city}</li>
            <li>Email: {elem.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

UsersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,

      address: PropTypes.exact({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.exact({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        })
      }),
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,

      company: PropTypes.exact({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      })
    })
  )
};


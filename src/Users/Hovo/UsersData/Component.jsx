import React from 'react';
import PropTypes from 'prop-types';

export default function Component({ user, showDescription }) {

  return (
    <div id="item">
      {user.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.image} alt={user.title} className="user-image" />
          <h2 className="user-title">{user.title}</h2>
          <p className="user-description">
            {user.isShow ? user.desc : user.desc?.slice(0, 90) + '...'}
          </p>
          <button onClick={() => showDescription(user.id)}>
            {user.isShow ? 'Hide More' : 'Read More'}
          </button>
        </div>
      ))}
    </div>
  );
}

Component.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isShow: PropTypes.bool.isRequired,
    })
  ),
	showDescription: PropTypes.func.isRequired
};
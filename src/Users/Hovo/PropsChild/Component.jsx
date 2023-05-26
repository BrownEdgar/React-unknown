import React from 'react';
import Button from './UI/Button/Button';
import PropTypes from 'prop-types';

export default function Component({ data, clicked }) {
  return (
    <>
      {data.map(user => (
        <div className="Todo__Card" key={user.id}>
          <div className="Todo__Info">
            <p >ID: {user.id}</p>
            <p className="Todo__Title">{user.title}</p>
            <Button
              title="Delete Account"
              variant= "dark"
              size= "sm"
              clicked={() => clicked(user.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
}

Component.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
    ),
    clicked:PropTypes.func
};
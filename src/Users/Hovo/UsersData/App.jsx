import { useState } from 'react';
import { users } from './Data';
import Component from './Component';
import './App.css';

export default function App() {
  const [user, setUser] = useState(users);

  const showDescription = (id) => {
    const showDesc = user.map(elem => {
      if (elem.id === id) {
        return { ...elem, isShow: !elem.isShow };
      }
      return elem;
    });
    setUser(showDesc);
  };

  return (
    <Component user={user} showDescription={showDescription} />
  );
}

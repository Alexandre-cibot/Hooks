import React, { useState } from 'react';
import './App.css';

import UserCard from './components/usercard';


function App() {
  const initialUsers = [
    {
      id: 0,
      name: "Steve Jobs",
      role: "Apple foundator",
      picture: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
      online: false
    },
    {
      id: 1,
      name: "Tim Cook",
      role: "Apple foundator's killer",
      picture: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      online: true
    },
    {
      id: 2,
      name: "Dan Abramov",
      role: "React core team",
      picture: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      online: true
    }
  ];
  const [users, setUsers] = useState(initialUsers);

  function removeUser(userId) {
    const nextUsers = users.filter(user => user.id !== userId);
    setUsers(nextUsers);
    console.log('remove user', userId)
  }

  return (
    <div className="App">
      <div className="page-centered">
        {
          !!users.length && users.map(user => (
            <UserCard
              key={user.id}
              className="page-centered"
              id={user.id}
              name={user.name}
              role={user.role}
              picture={user.picture}
              online={user.online}
              removeUser={removeUser}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import './Style.css';

function Home() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [hasMembers,setHasMembers] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setRegisteredUsers(parsedData);
      setHasMembers(true);
    }else{
      setHasMembers(false);
    }
  }, []);
  return (
    <div className='container'>
        <div>
        <Link to="/add">
            <button type="button"  className='btn'>Add member</button>
        </Link>
        <br />
        {registeredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {!hasMembers && (<h1>No members in the database</h1>)}
        </div>
        
    </div>
  )
}

export default Home
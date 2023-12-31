import React, { useEffect, useState } from 'react';
import EditUserForm from './EditUserForm';
import { Navigate } from "react-router-dom";
import './Style.css';

function Edit() {
    const userId=window.location.href.replace("http://localhost:3000/edit/","");
    const [user, setUser] = useState(null);
    const [done,setDone]=useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const foundUser = parsedData.find((userData) => userData.id === userId);
    if (foundUser) {
      setUser(foundUser);
    } else {
      setDone(true);
    }
}, [userId]);

  const handleSave = (updatedUser) => {
    const storedData = localStorage.getItem('registrationData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const updatedData = parsedData.map((userData) =>
      userData.id === userId ? updatedUser : userData
    );
    localStorage.setItem('registrationData', JSON.stringify(updatedData));
    setDone(true);
  };

  return (
    <div>
        {user ? <EditUserForm user={user} onSave={handleSave} /> : <p>Loading...</p>}
        {done &&(<Navigate to="/"/>)}
    </div>
  )
}

export default Edit;
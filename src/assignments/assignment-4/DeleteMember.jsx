import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

function DeleteMember() {
    const userId=window.location.href.replace("http://localhost:3000/delete/","");
    const [done,setDone]=useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const updatedData = parsedData.filter((userData) => userData.id !== userId);
    localStorage.setItem('registrationData', JSON.stringify(updatedData));
    setDone(true);
}, [userId]);
  return (
    <div>
        <h1>DeleteMember</h1>  
        {done &&(<Navigate to="/"/>)}
    </div>
  );
}
export default DeleteMember;
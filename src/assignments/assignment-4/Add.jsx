import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import './Style.css';
import Foto from './img/gallery.png';
function Add() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [done,setDone]=useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePictureChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfilePicture(selectedFile);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  const userId = new Date().getTime().toString();

  const storedData = localStorage.getItem('registrationData');
  let existingData = storedData ? JSON.parse(storedData) : [];
  if (!Array.isArray(existingData)) {
    existingData = [];
  }

  const registrationData = {
    id: userId,
    firstName,
    lastName,
    profilePicture: profilePicture ? profilePicture.name : null,
  };

  const updatedData = [...existingData, registrationData];

  localStorage.setItem('registrationData', JSON.stringify(updatedData));

  console.log('Registration submitted:', registrationData);
  setFirstName('');
  setLastName('');
  setProfilePicture(null);
    setDone(true);
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <div>
          <div className='hidden-image'>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handlePictureChange}
          />
          </div>
         
          <div className='image-holder'>
            <img src={Foto} alt="" className='form-image' />
          </div>
        </div>
        <div>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder='Full Names'
            className='input-group'
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder='Job Title'
            className='input-group'
            required
          />
        </div>
        <div className='center-x'>
            <button className='btn' type="submit">Add Member</button>
        </div>
        
      </form>
      {done &&(<Navigate to="/"/>)}
    </div>
  )
}

export default Add
import React, { useState } from 'react';
import './Style.css';
import Lady from './img/lady.jpg';
const EditUserForm = ({ user, onSave }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      ...user,
      firstName,
      lastName,
    };
    onSave(updatedUser);
  };

  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit}>
      <h2>Edit Member</h2>
      <div className='image-holder'>
            <img src={Lady} alt="" className='form-image' />
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
            <button className='btn' type="submit">Edit Member</button>
        </div>
        
      </form>
    </div>
  );
};

export default EditUserForm;
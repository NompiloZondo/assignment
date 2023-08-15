import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai';
import Lady from'./img/lady.jpg';
//import {BiEdit} from './AiOutline';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
        <div className='user-card-item'>
            {user.profilePicture && <img src={Lady} alt={`${user.firstName} ${user.lastName}`} />}
            <img src={Lady} alt="" className='user-card-image' />
            <div className='m-10'>
                
                    
                <p>
                    <span className='full-names'>{user.firstName} </span>
                    <br />
                    <span className='job-title'>{user.lastName}</span>
                </p>
            </div>
        </div>
        <div  className='user-card-item m-10'>
            <Link to={`/edit/${user.id}`}><AiOutlineEdit className='btn-edit' size={42}/></Link>
            <Link to={`/delete/${user.id}`}><AiOutlineDelete className='btn-delete' size={42}/></Link>
            {/* <span><AiOutlineDelete className='btn-delete' size={42}/></span> */}
            {/* <Link to={`/edit/${user.id}`}>Edit </Link> */}
        </div>
      
      
      
    </div>
  );
};

export default UserCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAccount.css';

const MyAccount = () => {
  const navigate = useNavigate();

  const userData = {
    name: "Carlos Eduardo Chavarria Centeno",
    username: "@EdCenteno",
    email: "user@theapp@test.com"
  };

  return (
    <div className="myaccount-container">
      <h1 className="account-title">My Account</h1>
      <div className="profile-card">
        <h3>Created by: </h3>
        <div className="avatar">
          <span className="avatar-initials">
            {userData.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        <div className="profile-details">
          <h2 className="profile-name">{userData.name}</h2>
          <p className="profile-username">{userData.username}</p>
        </div>
      </div>

      
      <button className="home-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default MyAccount;
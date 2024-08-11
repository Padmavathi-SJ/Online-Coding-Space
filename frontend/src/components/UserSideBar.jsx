import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const UserSideBar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:5000/api/logout', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then(response => {
        if (response.ok) {
          if (typeof onLogout === 'function') {
            onLogout();
          }
          navigate('/login'); // Redirect to the homepage after successful logout
        } else {
          console.error('Logout failed');
        }
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };
  

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        
        <li><Link to="/tests">Tests</Link></li> {/* New Link */}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserSideBar;
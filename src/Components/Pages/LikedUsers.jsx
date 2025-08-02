// pages/LikedUsers.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LikedUsers() {
  const [likedUsers, setLikedUsers] = useState([]);

  // Load liked users from localStorage
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedUsers')) || [];
    setLikedUsers(storedLikes);
  }, []);

  // Handle unliking a user
  const handleUnlike = (email) => {
    const updatedLikes = likedUsers.filter(user => user.email !== email);
    setLikedUsers(updatedLikes);
    localStorage.setItem('likedUsers', JSON.stringify(updatedLikes));
  };

  return (
    <div className="liked-users-page">
      <h2>Liked Users</h2>

      {likedUsers.length === 0 ? (
        <p>You haven't liked any users yet.</p>
      ) : (
        <div className="user-grid">
          {likedUsers.map((user, index) => (
            <div key={index} className="user-card">
              <img src={user.picture.medium} alt={user.name.first} />
              <h4>{user.name.first} {user.name.last}</h4>
              <p>{user.email}</p>
              <button onClick={() => handleUnlike(user.email)}>Unlike</button>
            </div>
          ))}
        </div>
      )}

      <br />
      <Link to="/team">
        <button>Back to Team</button>
      </Link>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css'; 

export default function Team() {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(12);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${results}`)
      .then(res => res.json())
      .then(data => setUsers(data.results));
  }, [results]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedUsers')) || [];
    setLikedUsers(storedLikes);
  }, []);

  // inside handleLike() in Team.jsx
    const handleLike = (user) => {
        const currentLikes = JSON.parse(localStorage.getItem('likedUsers')) || [];
        const alreadyLiked = currentLikes.some(u => u.email === user.email);
        if (!alreadyLiked) {
            const updatedLikes = [...currentLikes, user];
            localStorage.setItem('likedUsers', JSON.stringify(updatedLikes));
        }
    };


  const handleLoadMore = () => {
    fetch(`https://randomuser.me/api/?results=12`)
      .then(res => res.json())
      .then(data => setUsers(prev => [...prev, ...data.results]));
  };

  return (
    <div>
      <h2>Team Members</h2>

      <label>
        Number of results (1–100):{" "}
        <input
          type="number"
          min="1"
          max="100"
          value={results}
          onChange={(e) => setResults(Number(e.target.value))}
        />
      </label>

      <div className="user-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.medium} alt={user.name.first} />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>

            <button onClick={() => handleLike(user)}>Like</button>
            <Link
              to={`/team/${index}`}
              state={{ user }}
            >
              <button>View Profile</button>
            </Link>
          </div>
        ))}
      </div>

      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

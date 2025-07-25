import { useState } from "react";

import './UserCard.css'; 

export default function UserCard({ user }) {
  const [isHidden, setIsHidden] = useState(false);
  const [isLoved, setIsLoved] = useState(0);

  const toggleLove = () => {
    setIsLoved(prev => prev + 1);
  }

  return (
    <div className="user-card">
      <button className="love-button" onClick={toggleLove}>
        {isLoved > 0 ? `❤️ ${isLoved}` : "🤍"}
      </button>
      <img
        className="user-avatar"
        src={user.avatar}
        alt={`${user.name}'s avatar`}
      />
      <h2 className="user-name">{user.name}</h2>

      {!isHidden && <p className="user-email">{user.email}</p>}

      <button className="toggle-button" onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "📧 Show Email" : "🙈 Hide Email"}
      </button>
    </div>
  );
}


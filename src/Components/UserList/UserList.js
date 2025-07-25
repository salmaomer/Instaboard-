import { useState, useEffect } from 'react';
import './UserList.css';

export default function UserList() {
  const [allUsers, setAllUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=50');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const json = await response.json();

        const users = json.results.map(user => ({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          avatar: user.picture.large
        }));

        setAllUsers(users);
        setLoading(false);
      } 
      catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-list-container">
      <h1>Fetched Users:</h1>
      <div className="user-grid">
        {allUsers.slice(0, visibleCount).map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.avatar} alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      {visibleCount < allUsers.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

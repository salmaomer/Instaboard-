import { useLocation, useNavigate } from 'react-router-dom';
import './TeamDetails.css'; 

export default function TeamDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.user) {
    return <p>No user data found.</p>;
  }

  const user = state.user;

  return (
    <div>
      <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
      <img src={user.picture.large} alt={user.name.first} />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
      <p><strong>Street:</strong> {user.location.street.number} {user.location.street.name}</p>
      <p><strong>Postcode:</strong> {user.location.postcode}</p>

      <button onClick={() => navigate('/team')}>Back to Team</button>
    </div>
  );
}

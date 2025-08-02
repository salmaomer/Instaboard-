// pages/NotFound.jsx
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

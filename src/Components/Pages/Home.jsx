
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to InstaBoard 👋</h1>
      <p>
        This is your dynamic React app where you can explore team members, view profiles, and like your favorite users.
      </p>
      <p>
        Use the navigation bar above to get started!
      </p>
      <Link to="/team">
        <button>Back to Team</button>
      </Link>
    </div>
  );
}

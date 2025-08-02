import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className="about-page">
      <h2>About InstaBoard</h2>
      <Link to="/team">
        <button>Back to Team</button>
      </Link>
    </div>
  );
}

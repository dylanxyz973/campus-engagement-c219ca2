import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1 className="home-title">Events</h1>
      <p className="home-subtitle">
        Display school events while being able to add, delete and edit events.
      </p>

      <div className="home-actions">
        <Link to="/events" className="home-btn">
          Go to Events
        </Link>

      </div>
    </main>
  );
}
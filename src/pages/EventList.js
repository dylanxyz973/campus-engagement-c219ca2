import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Event from "../components/Event";
import { getEvents, deleteEvent } from "../services/api";

export default function EventList() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);   
    const [busyId, setBusyId] = useState(null); 
    const [error, setError] = useState(null);         

    useEffect(() => {
      async function fetchEvents() {
        try {
          const data = await getEvents();
          setEvents(data);
        } catch (err) {
          setError("Failed to load events.");
        } finally {
          setLoading(false);
        }
      }

      fetchEvents();
    }, []);

    async function handleDelete(event) {
      try {
        setBusyId(event.id);
        await deleteEvent(event.id);
        setEvents((prev) => prev.filter((e) => e.id !== event.id));
      } catch (err) {
        setError("Failed to delete event.");
      } finally {
        setBusyId(null);
      }
    }

    if (loading) {
      return <main>Loading events...</main>;
    }

    if (error) {
      return <main>{error}</main>;
    }

  return <main className="event-grid">
    {events.map((event) => (
        <Event
          key={event.id}
          event={event}
          onClick={() => navigate(`/events/${event.id}/edit`)}
          onDelete={() => handleDelete(event)}
          disabled={busyId === event.id}
        />
      ))}
  </main>;
}

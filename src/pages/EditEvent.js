import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
import { getEvents, updateEvent } from "../services/api";

export default function EditEvent() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [event, setEvent] = useState(null);
    const [values, setValues] = useState({
      event_name: "",
      event_pic: "",
    });
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function loadEvent() {
        try {
          setLoading(true);
          const events = await getEvents();
          const found = events.find((c) => c.id === Number(id));

          if (!found) {
            throw new Error("Event not found");
          }

          setEvent(found);
        } catch (err) {
          setError("Failed to load event.");
        } finally {
          setLoading(false);
       }
      }

      loadEvent();
    }, [id]);

    useEffect(() => {
      if (event) {
        setValues({
          event_name: event.event_name,
          event_pic: event.event_pic,
        });
      }
    }, [event]);

    function handleChange(e) {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
      e.preventDefault();

      try {
        setBusy(true);
        await updateEvent(id, values);
        navigate("/events");
      } catch (err) {
        setError("Failed to update event.");
      } finally {
        setBusy(false);
      }
    }

    if (loading) { return <main>Loading event...</main>; }
    if (error) { return <main>{error}</main>; }

  return <main className="form-container">
      <h1>Edit Event</h1>
      <EventForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Update Event"
      />
  </main>;
}

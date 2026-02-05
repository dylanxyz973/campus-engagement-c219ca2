import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import { addEvent } from "../services/api";

export default function AddEvent() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    event_name: "",
    event_pic: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setBusy(true);
      await addEvent(values);
      navigate("/events");
    } catch (err) {
      setError("Failed to add event.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="form-container">
      <h1>Add Event</h1>
      <EventForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Event"
      />
    </main>
  );
}


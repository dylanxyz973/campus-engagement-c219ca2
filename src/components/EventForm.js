export default function EventForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label className="form-label" htmlFor="event_name">Event Name</label>
        <input
          className="form-input"
          id="event_name"
          type="text"
          name="event_name"
          value={values.event_name}
          onChange={onChange}
          placeholder="Enter event name"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="event_pic">Event Image URL</label>
        <input
          className="form-input"
          id="event_pic"
          type="text"
          name="event_pic"
          value={values.event_pic}
          onChange={onChange}
          placeholder="Paste image URL"
        />
      </div>

      <button className="form-submit" type="submit" disabled={busy}>
        {busy ? "Saving..." : submitText}
      </button>
    </form>
  );
}

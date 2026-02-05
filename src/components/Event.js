import { useNavigate } from "react-router-dom";

  /* TODO: Complete the Card component
    - display the card image and name
    - display the card ID
    - edit button linking to edit page
    - delete button calling onDelete with the card object
    - style as a card UI */

export default function Event({ event, onDelete, busy }) {
  const navigate = useNavigate();
  if (!event) return null;

  function handleEdit(e) {
    e.stopPropagation(); // prevent card click
    navigate(`/events/${event.id}/edit`);
  }

  return (
    <div
      className="event"
      onClick={() => navigate(`/events/${event.id}/edit`)}
    >
  
    <img
      className="event-img"
      src={event.event_pic}
      alt={event.event_name}
      loading="lazy"
    />

    <h3 className="event-title">{event.event_name}</h3>

    <div className="event-actions">

      <button
        type="button"
        className="btn btn-edit"
        onClick={handleEdit}
      >
        Edit
      </button>

      <button
        type="button"
        className="btn btn-delete"
        onClick={(e) => {
          e.stopPropagation();

          const confirmed = window.confirm(
            "Are you sure you want to delete this event? This action cannot be undone."
          );

          if (confirmed) {
            onDelete();
          }
        }}
        disabled={busy}
      >
        {busy ? "Deleting..." : "Delete"}
      </button>



      </div>
    </div>
  );
}



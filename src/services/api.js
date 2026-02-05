const API_URL = process.env.REACT_APP_API_URL || "https://backend-ca2.vercel.app";

export async function getEvents() {
  // GET /allcards (provided as reference)
  const res = await fetch(`${API_URL}/allevents`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addEvent(event) {
  const res = await fetch(`${API_URL}/addevent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function updateEvent(id, event) {
  const res = await fetch(`${API_URL}/updateevent/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}


export async function deleteEvent(id) {
  const res = await fetch(`${API_URL}/deleteevent/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}


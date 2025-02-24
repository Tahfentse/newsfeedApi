import { useState, useEffect } from "react";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("http://localhost:5000/api/news");
        const data = await response.json();
        
        if (!data || data.length === 0) {
          throw new Error("No event data found.");
        }

        setEvents(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching events:", err);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Event Details</h2>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {events.map((event) => (
        <div key={event._id} className="mb-6 p-4 border rounded">
          <div className="mb-2">
            <label className="block font-semibold">ID</label>
            <p className="p-2 border rounded bg-gray-100">{event._id}</p>
          </div>
          <div className="mb-2">
            <label className="block font-semibold">Heading</label>
            <p className="p-2 border rounded bg-gray-100">{event.heading}</p>
          </div>
          <div className="mb-2">
            <label className="block font-semibold">Story</label>
            <p className="p-2 border rounded bg-gray-100">{event.story}</p>
          </div>
          <div className="mb-2">
            <label className="block font-semibold">Date</label>
            <p className="p-2 border rounded bg-gray-100">
              {event.date ? new Date(event.date).toLocaleString() : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
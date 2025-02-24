import { useState } from "react";


export default function EventPost() {
  // State variables for new event form
  const [newEvent, setNewEvent] = useState({
    heading: "",
    story: "",
    date: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send POST request to add new event
    try {
      const response = await fetch(" ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Failed to add event");
      }

      //const addedEvent = await response.json();

      // Display success message
      setSuccessMessage("Event added successfully!");

      // Clear form fields after successful submission
      setNewEvent({
        heading: "",
        story: "",
        date: "",
      });
      setError(null); // Reset any previous errors
    } catch (err) {
      setError(err.message);
      setSuccessMessage(null); // Reset success message if error occurs
      console.error("Error posting event:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-300 bg-[url('im3.jpeg')] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>
      
      {/* Display success message */}
      {successMessage && <p className="text-green-500 font-bold">{successMessage}</p>}

      {/* Display error message */}
      {error && <p className="text-red-500 font-bold">{error}</p>}

      {/* Form for adding a new event */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold  ">Heading</label>
          <input
            type="text"
            name="heading"
            value={newEvent.heading}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Story</label>
          <textarea
            name="story"
            value={newEvent.story}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Date</label>
          <input
            type="datetime-local"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-gray-100"
            required
          />
        </div>
        <div className="flex justify-center">
  <button
    type="submit"
    className="px-4 py-2 bg-blue-500 text-white rounded"
  >
    Add Event
  </button>
</div>

      </form>
    </div>
  );
}

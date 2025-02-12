import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // Handle the error condition if necessary
  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;
  console.log(events);

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // Returning a custom error response
    return new Response(
      JSON.stringify({ message: "Could not fetch events." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } else {
    const events = await response.json();
    console.log(events);
    return events;
  }
}

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  const data = useLoaderData();
  if (data.isError === true) return <p>{data.message}</p>;
  else return <EventsList events={data.events} />;
}

export default EventsPage;

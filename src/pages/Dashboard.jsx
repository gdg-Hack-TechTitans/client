import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/events/EventCard";
import Field from "../components/fields/Field";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiUrl}/v1/events/`);
        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          setIsLoading(false);
          console.log(data);
          setEvents(data);
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getEvents();
  }, [apiUrl]);
  return (
    <section className=" w-full h-screen">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex items-center justify-between px-20">
            <h2 className="text-3xl text-blue-700 font-semibold">Events</h2>
            <div className="flex items-center gap-4 ">
              <input
                type="text"
                className="w-[300px] text-bluePrimary border-2 rounded-md border-bluePrimary px-6 placeholder:text-bluePrimary py-1"
                placeholder="search"
              />
              <Link
                className="bg-bluePrimary px-4 hover:bg-blue-800 duration-300 py-2 rounded-md text-white drop-shadow-md"
                to="addEvent"
              >
                add Event
              </Link>
            </div>
          </div>
          <div className="py-10 w-full flex items-center justify-center flex-wrap gap-x-8 gap-y-10 h-full ">
            {events.map((event) => (
              <EventCard key={event.id} event={event} apiUrl={apiUrl} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;

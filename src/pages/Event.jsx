// Event.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Mentors from "../components/mentors/Mentors";
import Speakers from "../components/mentors/Speakers";
import Field from "../components/fields/Field";

const Event = () => {
  const [event, setEvent] = useState({});
  const [popUp, setPopUp] = useState(false); // Initialize popUp state
  const { eventId } = useParams();
  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const [eventMentors, setEventMentors] = useState([]);

  useEffect(() => {
    const getEvent = async () => {
      const res = await fetch(`${apiUrl}/v1/events/${eventId}`);
      console.log(res, "res");
      if (res.status === 200) {
        const data = await res.json();
        console.log("data", data);
        setEvent(data);
        console.log(event);
      } else {
        console.log("err", res, res.status);
      }
    };
    getEvent();
  }, [eventId, apiUrl]); // Add missing dependencies

  return (
    <section className="w-screen h-screen flex flex-col px-14 py-6 gap-5">
      <div className="flex items-center">
        <div className="w-[50%] flex flex-col gap-10">
          <h2 className="font-bold text-3xl uppercase">{event.name}</h2>
          <p className="text-gray-500 line-clamp-5">{/* Truncated text */}</p>
          <h4>{event.date}</h4>
        </div>
        <div className="w-[40%] ml-auto h-[300px] bg-red-300">
          <img
            src={event.thumbnail}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-10">
        <Mentors
          setPopUp={setPopUp}
          eventMentors={eventMentors}
          setEventMentors={setEventMentors}
        />
        <Speakers
          setPopUp={setPopUp}
          eventMentors={eventMentors}
          setEventMentors={setEventMentors}
        />
      </div>
      <Field />
    </section>
  );
};

export default Event;

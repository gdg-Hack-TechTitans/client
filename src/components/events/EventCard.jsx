import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const EventCard = ({ event, apiUrl }) => {
  const deleteEvent = async () => {
    const res = await fetch(`${apiUrl}/v1/events/${event.id}/`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    });
    if (res.status === 200) {
      console.log("success", res);
    } else {
      console.log("failed", res.status, res);
    }
  };
  return (
    <div
      key={event.id}
      className="card w-[20%] h-[320px] bg-white shadow-lg cursor-pointer drop-shadow-lg rounded-[22px] flex flex-col items-center justify-center relative"
    >
      <div className="w-full h-[60%] cardImg relative">
        <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full overlay rounded-t-[22px] cardOvelay">
          <Link to={`/dashboard/event/${event.id}`}>
            <h4 className="text-white text-3xl font-semibold">view more</h4>
          </Link>
        </div>
        <img
          src={event.thumbnail}
          className="w-full h-full object-cover rounded-t-[22px]"
          alt=""
        />
      </div>
      <div className="w-full h-[40%]  px-2 cardText">
        <h3 className="text-center text-lg font-bold uppercase text-[#193A9A]">
          {event.name}
        </h3>
        <p className="text-sm text-center line-clamp-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda
          ut sint sit hic corporis maiores qui libero inventore ea. Quo ducimus
          cumque necessitatibus provident molestiae iure rerum nulla explicabo
          in laborum. Culpa recusandae laudantium, deserunt praesentium odio
          commodi exercitationem magnam. Blanditiis cum accusantium sequi
          asperiores nihil nam veniam? Reiciendis?
        </p>
        <h4 className="text-center font-bold">{event.date}</h4>
      </div>
    </div>
  );
};

export default EventCard;

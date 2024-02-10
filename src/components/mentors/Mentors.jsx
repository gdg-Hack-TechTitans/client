import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Mentor from "./Mentor";
import { FaPlusCircle } from "react-icons/fa";

const Mentors = ({ eventMentors, setEventMentors }) => {
  const [popUp, setPopUp] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    const getMentors = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiUrl}/v1/mentors/`);
        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          setIsLoading(false);
          console.log(data);
          setMentors(data);
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getMentors();
  }, [apiUrl]);

  const addMentor = () => {
    setEventMentors([...eventMentors, selectedArray]);
  };

  return (
    <div className=" w-1/2 h-[200px] flex flex-col items-center">
      <div
        onClick={() => setPopUp(true)}
        className="border-2 border-bluePrimary cursor-pointer flex flex-col gap-5 items-center justify-center shadow-lg drop-shadow-lg my-2 w-[30%] rounded-md h-[120px]"
      >
        <h2 className="text-lg uppercase text-bluePrimary font-black ">
          Mentors
        </h2>
        <FaPlusCircle className="text-4xl text-bluePrimary" />
      </div>
      {popUp && (
        <div className="overlay fixed z-50  top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="w-[60%] h-[70%] bg-white rounded-lg py-5 drop-shadow-lg shadow-md flex flex-col justify-between">
            <div className="w-[90%] mx-auto flex items-center justify-center border-b-2 -px-3">
              <h4 className="w-[30%] capitalize">name</h4>
              <h4 className="w-[30%] capitalize">role</h4>
              <h4 className="w-[30%] capitalize">email</h4>
            </div>
            {mentors.map((mentor) => (
              <Mentor
                key={mentor.id}
                mentor={mentor}
                setEventMentors={setEventMentors}
                eventMentors={eventMentors}
                setSelectedArray={setSelectedArray}
                selectedArray={selectedArray}
                mentors={mentors}
                setMentors={setMentors}
              />
            ))}
            <div className="w-[70%] mx-auto flex  justify-center bg-green-300">
              <button
                onClick={addMentor}
                className=" bg-bluePrimary w-[30%] py-2 text-white rounded-md shadow-lg text-sm font-bold"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;

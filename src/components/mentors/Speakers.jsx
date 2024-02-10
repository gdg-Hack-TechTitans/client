import { useEffect, useState } from "react";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import Speaker from "./Speaker";

const Speakers = () => {
  const [popUp, setPopUp] = useState(false);
  const [speakers, setSpeakers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const getSpeakers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiUrl}/v1/speakers/`);
        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          setIsLoading(false);
          console.log(data);
          setSpeakers(data);
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getSpeakers();
  }, [apiUrl]);

  return (
    <>
      <div className=" w-1/2 h-[200px] flex flex-col items-center">
        <div
          onClick={() => setPopUp(true)}
          className="border-2 border-bluePrimary cursor-pointer flex flex-col gap-5 items-center justify-center shadow-lg drop-shadow-lg my-2 w-[30%] rounded-md h-[120px]"
        >
          <h2 className="text-lg uppercase text-bluePrimary font-black ">
            Speakers
          </h2>
          <FaPlusCircle className="text-4xl text-bluePrimary" />
        </div>
      </div>
      {popUp && (
        <div className="overlay fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="w-[40%] h-[50%] bg-white rounded-lg py-5 drop-shadow-lg shadow-md">
            {speakers.map((mentor) => (
              <Speaker key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Speakers;

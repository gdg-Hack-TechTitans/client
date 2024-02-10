import { useState } from "react";
import AddMentor from "../components/home/mentors/AddMentor";
import { IoMdAdd } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import events from "../data/events";
import Step01 from "../components/events/steps/Step01";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const AddEvent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const formSteps = [1, 2, 3];
  const [steps, setSteps] = useState(1);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    date: null,
    drive: "",
    thumbnail: null,
    judges: [
      {
        name: "",
        role: "",
        email: "",
        password: "",
        eventJudgment: [
          {
            judgment: null,
            team: null,
            field: "",
          },
        ],
      },
    ],
    mentors: [
      {
        name: "",
        email: "",
        role: "",
      },
    ],
    speakers: [
      {
        name: "",
        email: "",
      },
    ],
    fields: [
      {
        name: "",
        criterias: [
          {
            name: "",
            scrore: null,
          },
        ],
      },
    ],
  });

  const CreateEvent = async () => {
    setIsLoading(true);
    const res = await fetch(`${apiUrl}/v1/events/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 201) {
      setIsLoading(false);
      setPopUp(true);
      setTimeout(() => {
        setPopUp(false);
      }, 2000);
      console.log("success");
    } else {
      console.log(res.status, "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateEvent();
  };
  return (
    <section className="flex flex-col justify-center  w-full h-full gap-10">
      <div className="w-[60%]  flex flex-col items-center mx-auto gap-10 ">
        <form onSubmit={handleSubmit}>
          {steps === 1 ? (
            <Step01
              formData={formData}
              setFormData={setFormData}
              isLoading={isLoading}
            />
          ) : steps === 2 ? (
            <div>
              <div className="flex items-center justify-center gap-5 text-center">
                <div className="flex items-center justify-center flex-col gap-2">
                  <h2>mentors</h2>
                  <div className="flex items-center justify-center gap-4">
                    {Array.from({ length: 3 }, (_, index) => (
                      <AddMentor
                        key={index}
                        setFormData={setFormData}
                        formData={formData}
                        isLoading={isLoading}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <h2>Speakers</h2>
                  <div className="flex items-center justify-center gap-4">
                    {Array.from({ length: 3 }, (_, index) => (
                      <AddMentor
                        key={index}
                        setFormData={setFormData}
                        formData={formData}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 my-5">
                <button
                  onClick={() => setSteps(steps - 1)}
                  className="bg-orange-700 px-6 py-1 text-white rounded-md text-xl uppercase font-bold"
                >
                  previous
                </button>
                <button
                  onClick={() => setSteps(steps + 1)}
                  className="bg-orange-700 px-6 py-1 text-white rounded-md text-xl uppercase font-bold"
                >
                  next
                </button>
              </div>
            </div>
          ) : steps === 3 ? (
            <div className="w-full flex flex-col items-center gap-5">
              <div>
                <h2>Judges</h2>
              </div>
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: 3 }, (_, index) => (
                  <AddMentor
                    key={index}
                    setFormData={setFormData}
                    formData={formData}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </form>
        <div
          className={`absolute ${
            popUp ? "left-0" : "-left-[100%]"
          } left-0 top-20 w-[400px] cursor-pointer gap-5 bg-white flex items-center rounded-lg px-5 py-1 shadow-md drop-shadow-md`}
        >
          <IoCheckmarkDoneCircleSharp className="text-green-700 text-2xl" />
          <p className="font-semibold">event has been successufuly created !</p>
        </div>
      </div>
    </section>
  );
};

export default AddEvent;

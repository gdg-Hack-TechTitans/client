import { useEffect, useState } from "react";

const Mentor = ({
  mentor,
  setEventMentors,
  eventMentors,
  selectedArray,
  setSelectedArray,
  mentors,
  setMentors,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setMentors([...selectedArray, mentor]);
    } else {
      const newData = selectedArray.filter((arr) => arr !== mentor.id);
      setMentors(newData);
    }
  }, [isClicked]);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={`w-[90%] ${
        isClicked ? "bg-bluePrimary text-white" : "bg-transparent text-black"
      } mx-auto flex items-center justify-center border-b-2 -px-3 py-4 cursor-pointer hover:bg-bluePrimary hover:text-white duration-300`}
    >
      <h2 className="font-bold w-[30%] px-1 capitalize">{mentor.name}</h2>
      <h4 className="w-[30%] px-1 capitalize">{mentor.role}</h4>
      <h4 className="w-[30%] px-1 capitalize">{mentor.email}</h4>
    </div>
  );
};

export default Mentor;

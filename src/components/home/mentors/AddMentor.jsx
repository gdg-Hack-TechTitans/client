import { useState } from "react";

const AddMentor = ({ formData, setFormData, isLoading }) => {
  const [popUp, setPopUp] = useState(false);

  const handleCreateMentor = () => {
    setFormData({
      ...formData,
      mentors: [
        ...formData.mentors,
        {
          name: formData.mentors[0].name,
          email: formData.mentors[0].email,
          role: formData.mentors[0].role,
        },
      ],
    });
    setPopUp(false); // Close the popup after adding the mentor
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      mentors: formData.mentors.map((mentor, index) => {
        if (index === 0) {
          // Update only the mentor being edited
          return { ...mentor, [field]: e.target.value };
        }
        return mentor;
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateMentor();
  };

  return (
    <>
      <div
        onClick={() => setPopUp(true)}
        className="cursor-pointer w-[20%] shadow-lg text-4xl px-10 py-4 border-2 borderf-white border-dashed flex items-center justify-center"
      >
        +
      </div>
      {popUp && (
        <div className="absolute top-0 right-0 bottom-0 left-0 overlay flex items-center justify-center">
          <div className="relative w-[50%] h-[50%] bg-white drop-shadow-xl flex items-center justify-center">
            <div
              onClick={() => setPopUp(false)}
              className="absolute top-5 right-5 w-full h-[40px]  flex justify-end cursor-pointer"
            >
              x
            </div>
            <form
              className=" flex items-center justify-center gap-4 flex-col"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="name"
                className="border-2 py-1 px-2 rounded-md"
                onChange={(e) => handleChange(e, "name")}
              />
              <input
                type="email"
                placeholder="email"
                className="border-2 py-1 px-2 rounded-md"
                onChange={(e) => handleChange(e, "email")}
              />
              <input
                type="text"
                placeholder="role"
                className="border-2 py-1 px-2 rounded-md"
                onChange={(e) => handleChange(e, "role")}
              />
              <button
                type="submit"
                className="bg-orange-300 py-1 px-6 rounded-lg"
              >
                {isLoading && <p>loading...</p>}
                add mentor
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMentor;

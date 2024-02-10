import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import events from "../../../data/events";
import { IoMdAdd } from "react-icons/io";

const Step01 = ({ formData, setFormData, isLoading }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col gap-5 py-20">
      <div>
        <h2 className="text-bluePrimary uppercase text-center text-3xl font-black">
          Add an Event
        </h2>
      </div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center justify-between flex-wrap duration-300 w-[300px] py-2 bg-white drop-shadow-lg px-5 flex-row-reverse cursor-pointer mx-auto rounded-md relative"
      >
        <FaChevronDown />
        <h2>{formData.type || "Choose a type"}</h2>
        {openMenu && (
          <ul className="absolute bottom-10 h-[200px] overflow-y-scroll left-0 z-[10]  w-full flex flex-col items-start bg-white  py-2">
            {events.map((event) => (
              <li
                onClick={() => setFormData({ ...formData, type: event })}
                className="p-2 hover:bg-bluePrimary w-full hover:text-white duration-300 rounded-sm"
                key={event}
              >
                {event}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center  gap-7 flex-wrap  w-[60%] mx-auto ">
        <input
          type="text"
          className="px-2 py-1 rounded-md border-4 placeholder:text-bluePrimary border-[#C0DBFB] drop-shadow-lg"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="date"
          className="px-2 p-1 w-[45%] rounded-md border-4  flex items-start placeholder:text-bluePrimary border-[#C0DBFB] drop-shadow-lg"
          placeholder="date"
          name="date"
          onChange={handleChange}
        />
        <textarea
          className="px-2 p-0 h-[200px] w-[45%] rounded-md border-4  flex items-start placeholder:text-bluePrimary border-[#C0DBFB] drop-shadow-lg"
          name="description"
          placeholder="description"
          onChange={handleChange}
        />

        <div className="relative mt-1">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData({ ...formData, thumbnail: reader.result });
              };
              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
          <div className="flex flex-col gap-2 items-center justify-center w h-[200px] w-[210px] rounded-md bg-white text-blue-600 border border-blue-400 hover:bg-blue-100 cursor-pointer">
            {formData.thumbnail && (
              <img
                src={formData.thumbnail}
                alt="Thumbnail Preview"
                className="w-full h-full object-contain rounded-md"
              />
            )}
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-xl border-2 border-dashed border-bluePrimary">
              <IoMdAdd />
            </div>
            <p className="text-sm text-center w-[90%] mx-auto">
              Add your image here or drag and drop
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="relative bg-bluePrimary px-6 py-1 w-[20%] h-[40px] flex items-center justify-center mx-auto text-white rounded-md text-xl uppercase font-bold position-relative"
        disabled={isLoading}
      >
        {isLoading ? <div className="loader"></div> : "Submit"}
      </button>
    </div>
  );
};

export default Step01;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import Redirect
import logo from "../assets/imgs/home/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false); // State for error

  const user = {
    username: "admin",
    password: "admin",
  };

  const handleLogin = () => {
    if (
      userData.username === user.username &&
      userData.password === user.password
    ) {
      setPopUp(true);
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError(true); // Set error state to true
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <section className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-5"
        >
          <input
            className="border-2 border-bluePrimary w-[400px] px-2 py-2 rounded-md"
            placeholder="username"
            type="text"
            name="username" // Add name attribute
            value={userData.username} // Set value from state
            onChange={handleChange} // Handle change
          />
          {error && ( // Display error message if error state is true
            <p className="text-red-500">Invalid username or password</p>
          )}
          <input
            className="border-2 border-bluePrimary w-[400px] px-2 py-2 rounded-md"
            placeholder="password"
            type="password"
            name="password" // Add name attribute
            value={userData.password} // Set value from state
            onChange={handleChange} // Handle change
          />
          <button className="bg-bluePrimary py-2 rounded-md text-white capitalize text-xl font-bold">
            login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

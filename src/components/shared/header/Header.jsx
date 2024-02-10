import logo from "../../../assets/imgs/home/logo.png";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const links = [
    { link: "/", name: "JUDGES" },
    { link: "/", name: "MENTORS" },
    { link: "/", name: "PARTICIPENTS" },
  ];
  return (
    <header className="w-screen py-2 rounded-bl-3xl rounded-br-3xl flex items-center justify-between px-10 bg-white drop-shadow-lg">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-blue-500 cursor-pointer hover:text-blue-800 hover:font-bold duration-300"
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div className="cursor-pointer  hover:bg-blue-800 duration-300 flex items-center gap-2 bg-blue-400 flex-row-reverse text-white py-2 px-5 rounded-md drop-shadow-lg">
        <CgProfile className="text-2xl" />
        <h5>My Account</h5>
      </div>
    </header>
  );
};

export default Header;

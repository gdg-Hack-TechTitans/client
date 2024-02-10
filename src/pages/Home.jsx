import logo from "../assets/imgs/home/logo.png";
import image from "../assets/imgs/home/image.png";
import blueShape from "../assets/imgs/home/blueShape.png";
import { Link } from "react-router-dom";
import background from "../assets/imgs/home/background.png";

const Home = () => {
  return (
    <section className="relative w-screen h-screen  overflow-hidden flex flex-col  justify-between px-20 py-7">
      {/* <div className="absolute left-0 top-0 bottom-0 right-0 w-full h-full">
        <img className="w-full h-full object-cover" src={background} alt="" />
      </div> */}
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="w-full  flex items-center justify-between px-20 ">
        <div className="w-full h-full  flex flex-col justify-between ">
          <h1 className="text-blue-800 font-bold text-4xl">GDG EVENTS</h1>
          <p className="text-blue-300 text-lg">
            Welcome to GDG events your ultimate solution for seamless hackathon
            management. Effortlessly oversee, select, edit, and assign roles to
            all members. Simplify your hackathon experience today!
          </p>
          <Link
            className="w-[20%] text-white py-1 px-4 bg-blue-600 font-semibold drop-shadow-xl"
            to={"/login"}
          >
            Let start
          </Link>
        </div>
        <div className="w-full h-full">
          <div className="w-[60%] ml-auto">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[30%] -z-10">
        <img className="" src={blueShape} alt="" />
      </div>
      <div></div>
    </section>
  );
};

export default Home;

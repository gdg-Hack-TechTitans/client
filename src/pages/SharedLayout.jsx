import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";

const SharedLayout = () => {
  return (
    <main className="flex justify-between w-scren flex-col h-screen">
      <Header />
      <Outlet />
    </main>
  );
};

export default SharedLayout;

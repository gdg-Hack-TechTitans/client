import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/addEvent" element={<AddEvent />} />
          <Route path="/dashboard/event/:eventId" element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import MyBookings from "./pages/MyBookings/MyBookings";
import Hotels from "./pages/Hotels/Hotels";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HotelsSearch from "./pages/HotelsSearch/HotelsSearch";
import Booking from "./pages/Booking/Booking";
import NotFound from "./pages/NotFound/NotFound";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mybookings" element={<MyBookings />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="search" element={<HotelsSearch />} />
        <Route path="booking/:id" element={<Booking />} />
        <Route path="details/:id" element={<HotelDetails />} />
        <Route path="mybookings" element={<MyBookings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

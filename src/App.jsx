import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import MyBookings from "./pages/MyBookings/MyBookings";
import Hotels from "./pages/Hotels/Hotels";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mybookings" element={<MyBookings />} />
        <Route path="hotels" element={<Hotels />} />
      </Route>
    </Routes>
  );
}

export default App;

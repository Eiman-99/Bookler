import { NavLink } from "react-router-dom";
import { FaHotel, FaHome, FaTaxi, FaPlane } from "react-icons/fa";

function CustomNavbar() {
  return (
    <div className="flex gap-12 py-6 text-white">
      <NavLink
        to="/hotels"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition ${
            isActive ? "text-gray-300" : "hover:text-gray-200"
          }`
        }
      >
        <FaHotel className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">HOTEL</span>
      </NavLink>

      <a>
        <FaHome className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">VILLA</span>
      </a>

      <a>
        <FaTaxi className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">TAXI</span>
      </a>

      <a>
        <FaPlane className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">FLIGHTS</span>
      </a>
    </div>
  );
}

export default CustomNavbar;

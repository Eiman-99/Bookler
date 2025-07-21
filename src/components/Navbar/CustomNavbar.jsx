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

      <NavLink
        to="/villa"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition ${
            isActive ? "text-gray-300" : "hover:text-gray-200"
          }`
        }
      >
        <FaHome className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">VILLA</span>
      </NavLink>

      <NavLink
        to="/taxi"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition ${
            isActive ? "text-gray-300" : "hover:text-gray-200"
          }`
        }
      >
        <FaTaxi className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">TAXI</span>
      </NavLink>

      <NavLink
        to="/flights"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition ${
            isActive ? "text-gray-300" : "hover:text-gray-200"
          }`
        }
      >
        <FaPlane className="text-2xl" />
        <span className="text-xs font-medium tracking-wide">FLIGHTS</span>
      </NavLink>
    </div>
  );
}

export default CustomNavbar;

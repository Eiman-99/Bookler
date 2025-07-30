import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiArrowSmRight, HiHome, HiMenuAlt2 } from "react-icons/hi";
import { BsFilePersonFill } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import cloudImg from "../../assets/cloud.png";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

export function SideNav() {
  const [isExpanded, setIsExpanded] = useState(true);
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div
      className={`bg-[#0050C8] text-white relative transition-all duration-300 
        ${isExpanded ? "w-56" : "w-16"} shrink-0 
        mt-10 h-[550px] rounded-2xl shadow-md`}
    >
      <div className="flex items-center justify-between px-4 py-3 relative">
        {isExpanded && (
          <img
            src={logo}
            alt="logo"
            className=" w-auto transition-opacity duration-300"
          />
        )}

        <button
          className="text-white focus:outline-none z-50"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <HiMenuAlt2 size={24} />
        </button>
      </div>

      <div className="pt-16 px-2 space-y-6">
        <NavLink
          to="/"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-600"
        >
          <HiHome size={20} />
          {isExpanded && <span>Home</span>}
        </NavLink>

        <NavLink
          to="/mybookings"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-600"
        >
          <BsFilePersonFill size={20} />
          {isExpanded && <span>My Bookings</span>}
        </NavLink>

        <a className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-600">
          <FaEarthAmericas size={20} />
          {isExpanded && <span>Explore</span>}
        </a>

        <a className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-600">
          <MdContactSupport size={20} />
          {isExpanded && <span>Support</span>}
        </a>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="relative w-full">
          <img src={cloudImg} alt="cloud" className="w-full" />
          {!currentUser && (
            <Link
              to="/register"
              className={`absolute bottom-10 left-1/2 -translate-x-1/2 
        bg-white text-[#FF4F4F] font-semibold px-4 py-2 rounded-full border border-[#FF4F4F] 
        hover:bg-[#FF4F4F] hover:text-white transition-all duration-300 
        whitespace-nowrap w-max transform 
        ${
          isExpanded
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
            >
              Sign UP Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

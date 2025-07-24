import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Dropdown } from "flowbite";
import { useEffect } from "react";
import userImg from "../../assets/user.png";

function AuthNavbar() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    console.log("current user", currentUser);
  };

  useEffect(() => {
    const $triggerEl = document.getElementById("user-menu-button");
    const $dropdownEl = document.getElementById("user-dropdown");

    if ($triggerEl && $dropdownEl) {
      new Dropdown($dropdownEl, $triggerEl);
    }
  }, []);

  return (
    <div className="flex justify-end gap-3 p-4">
      {currentUser ? (
        <div className="relative inline-block text-left ">
          <button
            id="user-menu-button"
            className="flex items-center bg-blue-900 text-white font-medium px-4 py-2 rounded-full hover:bg-blue-800 transition cursor-pointer"
          >
            <img
              src={userImg}
              alt="user photo"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="mr-2">{currentUser.username}</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            id="user-dropdown"
            className="hidden absolute right-0 z-10 mt-2 w-44 bg-white rounded-md shadow-lg focus:outline-none"
          >
            <ul
              className="py-1 text-gray-700"
              aria-labelledby="user-menu-button"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <NavLink to="/login" className="text-white">
            Login
          </NavLink>
          <NavLink to="/register" className="text-white">
            Sign Up
          </NavLink>
        </>
      )}
    </div>
  );
}

export default AuthNavbar;

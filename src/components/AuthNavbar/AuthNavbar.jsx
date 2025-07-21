import { NavLink } from "react-router-dom";

function AuthNavbar() {
  return (
    <div className="flex justify-end gap-3 p-4">
      <NavLink to="/login" className="text-white">
        Login
      </NavLink>
      <NavLink to="/register" className="text-white">
        Sign Up
      </NavLink>
    </div>
  );
}

export default AuthNavbar;

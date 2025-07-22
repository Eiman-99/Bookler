import { SideNav } from "../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import banner from "../assets/banner.png";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import AuthNavbar from "../components/AuthNavbar/AuthNavbar";
import { SearchCard } from "../components/SearchCard/SearchCard";

function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden px-10">
      <div className="absolute top-0 left-0 -z-10 w-full h-[300px]">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col lg:flex-row">
        <aside className="hidden lg:block min-w-[250px]">
          <SideNav />
        </aside>

        <main className="flex-1 flex flex-col gap-15 px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8">
          <AuthNavbar />

          <CustomNavbar />

          <SearchCard />

          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiHome,
  HiShoppingBag,
  HiTicket,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import cloudImg from "../../assets/cloud.png";

export function SideNav() {
  return (
    <Sidebar className="h-[44rem] mt-10">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            as={NavLink}
            to="/"
            icon={() => <HiHome className="text-white" />}
            className="text-white hover:text-gray-200"
          >
            Home
          </SidebarItem>

          <SidebarItem
            as={NavLink}
            to="/mybookings"
            icon={() => <HiTicket className="text-white" />}
            className="text-white hover:text-gray-200"
          >
            My Bookings
          </SidebarItem>

          <SidebarItem
            as={NavLink}
            to="/explore"
            icon={() => <HiShoppingBag className="text-white" />}
            className="text-white hover:text-gray-200"
          >
            Explore
          </SidebarItem>

          <SidebarItem
            as={NavLink}
            to="/support"
            icon={() => <HiArrowSmRight className="text-white" />}
            className="text-white hover:text-gray-200"
          >
            Support
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
      <div className="absolute bottom-0">
        <img src={cloudImg} alt="" />
      </div>
    </Sidebar>
  );
}

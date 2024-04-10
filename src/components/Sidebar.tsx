import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  PiBookOpenDuotone,
  PiChatsTeardropDuotone,
  PiFolderNotchDuotone,
  PiIdentificationBadgeDuotone,
  PiIdentificationCardDuotone,
  PiLinkDuotone,
  PiNotebookDuotone,
  PiShoppingBagOpenDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import { RiPieChartFill } from "react-icons/ri";
import { RxSwitch } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed py-4 px-6 w-60 overflow-y-scroll no-scrollbar h-screen">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-4 mt-5">
        <p className="text-grey-500">Favorites</p>
        <p className="text-grey-300">Recently</p>
      </div>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="flex items-center gap-2">
          <span>
            <GoDotFill size={14} color="#1C1C1C33" />
          </span>{" "}
          <NavLink to="">Overview</NavLink>
        </li>
        <li className="flex items-center gap-2">
          <span>
            <GoDotFill size={14} color="#1C1C1C33" />
          </span>{" "}
          <NavLink to="">Transactions</NavLink>
        </li>
      </ul>
      <div className="mt-10">
        <p className="text-grey-500">Dashboards</p>
        <ul className="mt-2 flex flex-col gap-2 ml-2">
          <li className="flex items-center gap-3 bg-grey-100  pl-5 py-2 rounded-lg transition-all">
            <span>
              <RiPieChartFill size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Overview
            </NavLink>
          </li>

          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiShoppingBagOpenDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Balance
            </NavLink>
          </li>

          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiFolderNotchDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Book Balance
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiBookOpenDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              All Transactions
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <p className="text-grey-500">Pages</p>
        <ul className="mt-2 flex flex-col gap-2 ml-2">
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiIdentificationBadgeDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Sub Account
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <NavLink to="" className="text-center mx-auto">
              All Account
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <NavLink to="" className="text-center mx-auto">
              Add Account
            </NavLink>
          </li>

          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiIdentificationCardDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Digital Wallet
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiLinkDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Payment Link
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiNotebookDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Payouts
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiChatsTeardropDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Mandates
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <PiUserDuotone size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Profile
            </NavLink>
          </li>
          <li className="flex items-center gap-1 hover:bg-grey-100 py-2 pl-2 hover:pl-3 rounded-lg transition-all">
            <span>
              <MdOutlineKeyboardArrowRight size={20} color="#1C1C1C33" />
            </span>
            <span>
              <RxSwitch size={20} color="" />
            </span>{" "}
            <NavLink to="" className="">
              Switch Biz
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <p className="text-grey-500">Actions</p>
        <ul className="mt-2 flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <span>
              <GoDotFill size={14} color="#1C1C1C33" />
            </span>{" "}
            <NavLink to="">Settings</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <GoDotFill size={14} color="#DD0A3533" />
            </span>{" "}
            <NavLink to="" className="text-[#DD0A35]">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

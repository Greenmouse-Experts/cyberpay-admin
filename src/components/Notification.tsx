import { FaTimes } from "react-icons/fa";
import {
  ActivitiesItem,
  NotificationItem,
  SubAccountItem,
} from "../features/Notifications/NotificationItem";

interface NotificationProps{
  showNotify: boolean;
  handleHideNotify: () => void;
}

function Notification({ showNotify, handleHideNotify }:NotificationProps) {
  return (
    <aside
      className={`fixed w-72 right-0 flex z-50 bg-white flex-col items-start justify-start pl-5 overflow-y-scroll no-scrollbar h-screen transition-all ${
        showNotify ? "right-0" : "right-[-1000px]"
      }`}
    >
      <div className="mt-5">
        <div>
          <FaTimes className=" md:hidden" onClick={handleHideNotify} />
          <p className="mb-5">Notification</p>
        </div>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
      <div className="mt-5">
        <p>Activities</p>
        <ActivitiesItem />
        <ActivitiesItem />
        <ActivitiesItem />
        <ActivitiesItem />
        <ActivitiesItem />
      </div>
      <div className="mt-5">
        <p>Sub Accounts</p>
        <SubAccountItem />
        <SubAccountItem />
        <SubAccountItem />
        <SubAccountItem />
        <SubAccountItem />
      </div>
    </aside>
  );
}

export default Notification;

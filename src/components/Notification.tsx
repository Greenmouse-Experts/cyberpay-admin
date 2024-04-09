import {
  ActivitiesItem,
  NotificationItem,
  SubAccountItem,
} from "../features/Notifications/NotificationItem";

function Notification() {
  return (
    <aside className="fixed w-72 right-0 flex flex-col items-start justify-start pl-5 overflow-y-scroll no-scrollbar h-screen">
      <div className="mt-5">
        <p className="mb-5">Notification</p>
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

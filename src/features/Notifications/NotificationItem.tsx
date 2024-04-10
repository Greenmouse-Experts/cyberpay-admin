import { BiTransferAlt } from "react-icons/bi";

export function NotificationItem() {
  return (
    <div className="flex items-start gap-1 mt-3">
      <div className=" bg-[#E8F0FC] px-1 py-1 rounded-lg">
        <BiTransferAlt size={14} />
      </div>
      <div>
        <p>Bank Transfer Successful</p>
        <p className="text-[12px] text-grey-500">Ceerem Investment Limited</p>
      </div>
    </div>
  );
}
export function ActivitiesItem() {
  return (
    <div className="flex items-start gap-2 mt-3">
      <div className="">
        <img
          src="/images/activity-1.svg"
          alt="activity-photo"
          className="rounded-full w-6 h-6"
        />
      </div>
      <div>
        <p>Subscribed 15gig Data Plan</p>
        <p className="text-[12px] text-grey-500">12 hours ago</p>
      </div>
    </div>
  );
}
export function SubAccountItem() {
  return (
    <div className="flex items-start gap-2 mt-3">
      <div className="">
        <img
          src="/images/activity-1.svg"
          alt="activity-photo"
          className="rounded-full w-6 h-6"
        />
      </div>
      <div>
        <p>Victor Bolu</p>
      </div>
    </div>
  );
}

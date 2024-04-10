import {
  PiBellDuotone,
  PiClockCounterClockwiseDuotone,
  PiMagnifyingGlass,
  PiNotebookDuotone,
  PiStarDuotone,
  PiSunDuotone,
} from "react-icons/pi";

function Header() {
  return (
    <header className="border-b border-grey-100 h-[68px] px-5 flex items-center justify-between">
      <div className="flex gap-3">
        <PiNotebookDuotone size={20} />
        <PiStarDuotone size={20} />
        <p className=" text-grey-500">Merchant Dashboards</p>
        <p className="text-grey-500">/</p>
        <p>Merchant Dashboards</p>
      </div>

      <div className="flex gap-3">
        <div className="w-40 h-7 relative rounded-lg overflow-hidden">
          <PiMagnifyingGlass
            size={18}
            color="#1C1C1C33"
            className="absolute left-1 top-1"
          />
          <input
            type="text"
            placeholder="Search"
            className=" bg-grey-100 w-full h-full focus:outline-none px-7 placeholder:text-sm"
          />
          <PiMagnifyingGlass
            size={18}
            color="#1C1C1C33"
            className="absolute right-1 top-1"
          />
        </div>
        <PiSunDuotone size={20} />
        <PiClockCounterClockwiseDuotone size={20} />
        <PiBellDuotone size={20} />
        <PiNotebookDuotone size={20} />
      </div>
    </header>
  );
}

export default Header;

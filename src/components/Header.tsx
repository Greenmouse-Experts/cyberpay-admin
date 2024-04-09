import { PiNotebookDuotone, PiStarDuotone, PiSunDuotone } from "react-icons/pi";

function Header() {
  return (
    <header className="border-b border-graylighter h-[68px] px-5 flex items-center justify-between">
      <div className="flex gap-3">
        <PiNotebookDuotone />
        <PiStarDuotone />
        <p className=" text-graynormal">Merchant Dashboards</p>
        <p className="text-graynormal">/</p>
        <p>Merchant Dashboards</p>
      </div>

      <div>
      <PiSunDuotone />
      </div>
    </header>
  );
}

export default Header;

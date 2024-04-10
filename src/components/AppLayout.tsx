import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Notification from "./Notification";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" ml-60 mr-72 border border-x border-l-grey-100 w-full h-screen">
        <Header />
        <div className="px-7 py-10">

        <Outlet />
        </div>
      </main>
      <Notification />
    </div>
  );
}

export default AppLayout;

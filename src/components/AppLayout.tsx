import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Notification from "./Notification";
import Header from "./Header";
import { useEffect, useState } from "react";

function AppLayout() {
  const [showNav, setShowNav] = useState(true);
  const [showNotify, setShowNotify] = useState(true);

  const handleShowNav = () => {
    setShowNav(!showNav);
    if (windowSize.width <= 800) {
      console.log(
        "Perform an action because the screen width is 800px or less"
      );
      setShowNotify(false);
    }
  };

  const handleHideNav = () => {
    setShowNav(false);
  };
  const handleHideNotify = () => {
    setShowNotify(false);
  };

  const handleNotify = () => {
    setShowNotify(!showNotify);
    if (windowSize.width <= 800) {
      console.log(
        "Perform an action because the screen width is 800px or less"
      );
      setShowNav(false);
    }
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Remove listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Perform actions based on the window size
  useEffect(() => {
    if (windowSize.width <= 800) {
      console.log(
        "Perform an action because the screen width is 800px or less"
      );
      setShowNotify(false);
      setShowNav(false);
    }
  }, [windowSize.width]);

  return (
    <div className="flex">
      <Sidebar showNav={showNav} handleHideNav={handleHideNav} />
      <main
        className={` ${showNotify ? "md:mr-72" : "mr-0"} ${
          showNav ? "md:ml-60" : "ml-0"
        }  transition-all   w-full h-screen`}
      >
        <Header handleShowNav={handleShowNav} handleNotify={handleNotify} />
        <div className="px-7 py-10 border border-x-grey-100">
          <Outlet />
        </div>
      </main>
      <Notification showNotify={showNotify} handleHideNotify={handleHideNotify} />
    </div>
  );
}

export default AppLayout;

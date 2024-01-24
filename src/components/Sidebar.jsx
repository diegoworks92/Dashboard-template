import { useState } from "react";
import SocialMedia from "./sidebar/SocialMedia";
import { Link } from "react-router-dom";
import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage3Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import SidebarButtons from "./sidebar/SidebarButtons";
import SidebarAccordion from "./sidebar/SidebarAccordion";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  /*   const [showSubmenu, setShowSubmenu] = useState(false); */

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static  w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          {/*           <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin <span className="text-primary text-4xl">.</span>
          </h1> */}
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="logo.ico"
                alt="company logo"
                className="w-16 h-10 mb-10 mt-3 object-cover hover:cursor-pointer"
              />
            </Link>
          </div>
          <ul>
            <SidebarButtons />

            {/*             <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" /> Social media
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>

              <SocialMedia showSubmenu={showSubmenu} />
            </li> */}
            <SidebarAccordion
            /*               setShowSubmenu={setShowSubmenu}
              showSubmenu={showSubmenu} */
            />
          </ul>
        </div>
        <nav>
          <Link
            to="/login"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiLogoutCircleRLine className="text-primary" /> Log Out
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;

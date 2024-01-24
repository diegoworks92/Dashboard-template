import {
  RiArrowRightSLine,
  RiCustomerService2Line,
  RiEarthLine,
} from "react-icons/ri";
import SocialMedia from "./SocialMedia";
import { useState } from "react";

const SidebarAccordion = () => {
  /*   const [showSubmenu, setShowSubmenu] = useState(false); */

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleButton = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const information = [
    {
      id: 1,
      name: "Support",
      ico: <RiCustomerService2Line className="text-primary" />,
      children: <SocialMedia activeSubmenu={activeSubmenu === 1} id={1} />,
    },
    {
      id: 2,
      name: "Social media",
      ico: <RiEarthLine className="text-primary" />,
      children: <SocialMedia activeSubmenu={activeSubmenu === 2} id={2} />,
    },
  ];

  return (
    <>
      {information.map((data) => {
        return (
          <li key={data.id}>
            <button
              onClick={() => handleButton(data.id)}
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <span className="flex items-center gap-4">
                {data.ico} {data.name}
              </span>
              <RiArrowRightSLine
                className={`mt-1 ${
                  activeSubmenu === data.id && "rotate-90"
                } transition-all`}
              />
            </button>
            {/*               <ul className={`my-2 ${!showSubmenu && "hidden"}`}> */}
            {/*  <SocialMedia showSubmenu={showSubmenu} /> */}
            {data.children}
          </li>
        );
      })}
    </>
  );
};

export default SidebarAccordion;

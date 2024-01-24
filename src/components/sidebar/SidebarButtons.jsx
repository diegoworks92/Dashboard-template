import {
  RiBarChart2Line,
  RiCalendarTodoLine,
  RiCustomerService2Line,
  RiHome6Line,
  RiMessage3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const SidebarButtons = () => {
  return (
    <>
      {data.map((d) => {
        return (
          <li key={d.id}>
            <Link
              to={d.to}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              {d.ico} {d.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SidebarButtons;

const data = [
  {
    id: 1,
    name: "Home",
    to: "/",
    ico: <RiHome6Line className="text-primary" />,
  },
  {
    id: 2,
    name: "Analytic",
    to: "/",
    ico: <RiBarChart2Line className="text-primary" />,
  },
  {
    id: 3,
    name: "Message",
    to: "/",
    ico: <RiMessage3Line className="text-primary" />,
  },
  {
    id: 4,
    name: "Schedule",
    to: "/",
    ico: <RiCalendarTodoLine className="text-primary" />,
  },
];

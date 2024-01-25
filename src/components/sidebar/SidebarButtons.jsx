import { Link } from "react-router-dom";

const SidebarButtons = ({ icon, name }) => {
  return (
    <li>
      <Link
        to="/"
        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
      >
        {icon} {name}
      </Link>
    </li>
  );
};

export default SidebarButtons;

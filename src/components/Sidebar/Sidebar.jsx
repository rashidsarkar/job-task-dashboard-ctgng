import {
  FiHome,
  FiClipboard,
  FiBarChart,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { FaDropbox } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";

import { FaArrowRightFromBracket } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <nav className="flex flex-col">
        <div>
          <a
            className="flex items-center p-2 text-blue-400 rounded-md"
            href="#"
          >
            <FiHome className="w-5 h-5" />
            <span className="ml-3">Overview</span>
          </a>
          <a
            className="flex items-center p-2 mt-5 text-black rounded-md"
            href="#"
          >
            <FiClipboard className="w-5 h-5" />
            <span className="ml-3">My Course</span>
          </a>
          <a
            className="flex items-center p-2 mt-5 text-black rounded-md"
            href="#"
          >
            <LuGraduationCap className="w-5 h-5" />
            <span className="ml-3">Completed</span>
          </a>
          <a
            className="flex items-center p-2 mt-5 text-black rounded-md"
            href="#"
          >
            <FaDropbox className="w-5 h-5" />
            <span className="ml-3">Financial Aid</span>
          </a>
          <a
            className="flex items-center p-2 mt-5 text-black rounded-md"
            href="#"
          >
            <LuDollarSign className="w-5 h-5" />
            <span className="ml-3">Transactions</span>
          </a>
          <a
            className="flex items-center p-2 mt-5 text-black rounded-md"
            href="#"
          >
            <FiBarChart className="w-5 h-5" />
            <span className="ml-3">Reports</span>
          </a>
          <a
            className="flex items-center p-2 mt-5 text-black rounded-md"
            href="#"
          >
            <IoStatsChart className="w-5 h-5" />
            <span className="ml-3">Statistics</span>
          </a>
        </div>
      </nav>
      <div className="flex flex-col">
        <a
          className="flex items-center p-2 mt-5 text-black rounded-md"
          href="#"
        >
          <FaArrowRightFromBracket className="w-5 h-5" />
          <span className="ml-3">Support</span>
        </a>
        <a
          className="flex items-center p-2 mt-5 text-black rounded-md"
          href="#"
        >
          <FiSettings className="w-5 h-5" />
          <span className="ml-3">Settings</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

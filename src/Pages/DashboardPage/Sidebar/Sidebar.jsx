import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

import { TbLogout2 } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { FaTasks } from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";
import MenuItem from "./MenuItem";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    toast.success(`Logout successfully`);
    navigate("/");
  };

  return (
    <>
      <div className="bg-second/30 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer py-3 font-bold">
            <Link to={"/"}>
              <span title="" className="flex items-center">
                <img
                  className="w-44"
                  src="https://i.ibb.co/80RtchJ/Task-Optima-300-x-200-px-400-x-100-px-4.png"
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>


        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none hover:text-first"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>


      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-second w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="hidden w-full md:flex px-4 py-3 lg:py-5 justify-center items-center shadow rounded mx-auto">
              <Link to={"/"}>
                <span title="" className="flex items-center">
                  <img
                    className="w-48"
                    src="https://i.ibb.co/80RtchJ/Task-Optima-300-x-200-px-400-x-100-px-4.png"
                    alt=""
                  />
                </span>
              </Link>
            </div>
          </div>


          <div className="flex flex-col justify-between flex-1  md:mt-4">
            <nav>
              <p className="md:hidden text-xl font-bold px-1 mb-2 text-gray-700 ">
                Menu
              </p>
              <hr className="md:hidden mb-4" />

              <MenuItem
                icon={FcStatistics}
                label="Task Status"
                address="/dashboard/taskstatus"
              />
              <MenuItem
                icon={FaTasks}
                label="Add Task"
                address="/dashboard/addtask"
              />
              <MenuItem
                icon={LuClipboardEdit}
                label="Manage Task"
                address="/dashboard/managetask"
              />
            </nav>
          </div>
        </div>


        <div>
          <hr />
          <div className="w-full mx-auto  text-center bg-gray-100 rounded mt-4 py-2  ">
            <div className="avatar  ">
              <div className="w-16 rounded">
                <img
                  className="hover:scale-125  transition-transform "
                  src={user?.photoURL}
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-black">
              {user?.displayName}
            </p>
          </div>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center justify-center  py-2 mt-2 text-black bg-gray-100 rounded  hover:text-gray-900 transition-colors hover:bg-gray-200 duration-300 transform"
          >
            <TbLogout2 className="w-5 h-5" />
            <span className="mx-2 text-lg  font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

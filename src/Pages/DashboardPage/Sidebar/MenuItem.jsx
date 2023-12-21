import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-5 py-2 my-2  rounded transition-colors duration-300 transform  hover:bg-white   hover:text-gray-800 ${
          isActive ? "bg-white  text-black" : "text-white"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-2 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;

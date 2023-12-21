import { TbLogin2 } from "react-icons/tb";
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navMenu = (
    <>
      <li className=" hover:text-first">
        <Link to="home" smooth={true} duration={500} spy={true} offset={-50}>
          <button>Home</button>
        </Link>
      </li>
      <li className=" hover:text-first">
        <Link
          to="whoUseTask"
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
        >
          <button>Benefit</button>
        </Link>
      </li>
      <li className=" hover:text-first">
        <Link
          to="features"
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
        >
          <button>Features</button>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <header>
        <div className="bg-white">
          <Container>
            <div>
              <nav className="relative flex items-center justify-between h-16 lg:h-20">
                <div>
                  <ul className="hidden lg:flex lg:items-center lg:space-x-10">
                    {navMenu}
                  </ul>
                </div>

                <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                  <div className="flex-shrink-0">
                    <NavLink to={"/"}>
                      <span title="" className="flex items-center">
                        <img
                          className="w-44"
                          src="https://i.ibb.co/Hx0P1j6/Task-Optima-300-x-200-px-400-x-100-px-2.png"
                          alt=""
                        />
                      </span>
                    </NavLink>
                  </div>
                </div>

                <div className="hidden lg:flex lg:items-center lg:space-x-10">
                  {user ? (
                    <NavLink to={"/dashboard/taskstatus"}>
                      <button
                        type="button"
                        className="text-white bg-second hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
                      >
                        <MdDashboard className="mr-1 text-xl" />
                        Dashboard
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink to={"/login"}>
                      <button
                        type="button"
                        className="text-white bg-second hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
                      >
                        <TbLogin2 className="mr-1 text-xl" />
                        Login
                      </button>
                    </NavLink>
                  )}
                </div>

                <div className="drawer drawer-end inline-flex justify-end p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    <label htmlFor="my-drawer-4">
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu  p-4 w-60 min-h-full bg-base-200 space-y-4 text-base-content">
                      <p className="text-md  font-semibold text-gray-400">
                        MENU
                      </p>
                      <div className="divider"></div>

                      {navMenu}

                      <div className="mt-10 lg:hidden">
                        {user ? (
                          <NavLink to={"/dashboard/taskstatus"}>
                            <button
                              type="button"
                              className="text-white bg-second hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
                            >
                              <MdDashboard className="mr-1 text-xl" />
                              Dashboard
                            </button>
                          </NavLink>
                        ) : (
                          <NavLink to={"/login"}>
                            <button
                              type="button"
                              className="text-white bg-second hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
                            >
                              <TbLogin2 className="mr-1 text-xl" />
                              Login
                            </button>
                          </NavLink>
                        )}
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </Container>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { IoSearchOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
const Navbar = ({ color }) => {
  const { user, logOut } = useContext(AuthContext);
  const logOutUser = () => {
    logOut();
  };
  const nav_link = (
    <>
      <p>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "font-medium border-b-2 border-black md:border-white text-xl" : isPending ? "pending" : "font-medium border-b-2 border-transparent text-xl"
          }
        >
          Home
        </NavLink>
      </p>
      <p>
        <NavLink to="/destination" className={({ isActive, isPending }) =>
            isActive ? "font-medium border-b-2 border-black md:border-white text-xl" : isPending ? "pending" : "font-medium border-b-2 border-transparent text-xl"
          }>Destination</NavLink>
      </p>
      <p>
        <NavLink to="/blog" className={({ isActive, isPending }) =>
            isActive ? "font-medium border-b-2 border-black md:border-white text-xl" : isPending ? "pending" : "font-medium border-b-2 border-transparent text-xl"
          }>Blog</NavLink>
      </p>
      <p>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isActive ? "font-medium border-b-2 border-black md:border-white text-xl" : isPending ? "pending" : "font-medium border-b-2 border-transparent text-xl"
          }>Contact</NavLink>
      </p>
    </>
  );
  
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black space-y-6 text-center bg-base-100 rounded-box w-52"
            >
              {nav_link}
            </ul>
          </div>
          <a className="text-xl">
            {color === "white" ? (
              <img className="w-24" src={logo} alt="" />
            ) : (
              ""
            )}
            {color === "black" ? (
              <img className="w-24" src={logo2} alt="" />
            ) : (
              ""
            )}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 items-center">
            {nav_link}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {color === "white" ? (
            <form className="hidden md:flex">
              <label
                className="input items-center gap-2 text-white input-search flex relative"
                style={{
                  border: "1px solid #FFF",
                  borderRadius: "5px",
                  background: "rgba(255, 255, 255, 0.20)",
                }}
              >
                <p>
                  <IoSearchOutline />
                </p>

                <input
                  type="text"
                  name="searchText"
                  className="grow text-white"
                  placeholder="Search your Destination..."
                />
                {/* <button
                  type="submit"
                  className="btn absolute -right-1 bg-[#F9A51A] border-none font-medium"
                >
                  Search
                </button> */}
              </label>
            </form>
          ) : (
            ""
          )}
          {!user ? (
            <NavLink
              to="/login"
              className="bg-[#F9A51A] btn border-none font-medium"
            >
              Login
            </NavLink>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1 font-bold">
                {user.email.split("@")[0]}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-xl bg-white text-black rounded-box w-52"
              >
                <li onClick={logOutUser}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {color === "white" ? (
        <form  className="md:hidden flex navbar">
          <label
            className="input items-center gap-2 text-white input-search flex w-full relative"
            style={{
              border: "1px solid #FFF",
              borderRadius: "5px",
              background: "rgba(255, 255, 255, 0.20)",
            }}
          >
            <p>
              <IoSearchOutline />
            </p>

            <input
              type="text"
              name="searchText"
              className="grow text-white w-full"
              placeholder="Search your Destination..."
            />
            {/* <button
              type="submit"
              className="btn absolute -right-1 bg-[#F9A51A] border-none font-medium"
            >
              Search
            </button> */}
          </label>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
Navbar.propTypes = {
  color: PropTypes.string,
};
export default Navbar;

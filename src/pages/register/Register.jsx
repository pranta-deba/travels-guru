import { NavLink } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Register = () => {
    return (
        <div className="max-w-[1550px] w-[95%] md:w-[90%] mx-auto">
          <Helmet>
        <title>Register</title>
      </Helmet>
        <nav className="md:pt-4">
          <Navbar color={"black"} />
        </nav>
        <div className="flex flex-col justify-center items-center py-6 md:py-12 space-y-4">
          <form className="flex flex-col border-2 border-[#ABABAB] rounded-lg p-8 md:min-w-[570px] space-y-5">
            <p className="font-bold text-2xl">Create an account</p>
            <label>
              <input
                type="text"
                placeholder="First Name"
                className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Username or Email"
                className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              />
            </label>
            <button className="bg-[#F9A51A] py-3 btn">Login</button>
            <div className="text-center">
            Already have an account? 
              <NavLink to="/login" className="text-[#F9A51A]"> Login</NavLink>
            </div>
          </form>

          <div className="flex justify-center items-center gap-2">
            <p className="h-[1px] bg-[#AAA] md:w-[200px]"></p>
            <p>Or</p>
            <p className="h-[1px] bg-[#AAA] md:w-[200px]"></p>
          </div>

          <div className="flex flex-col md:min-w-[430px] space-y-2">
            <NavLink className="border p-3 rounded-3xl w-full flex items-center">
              <span className="text-4xl text-blue-700"><FaFacebook/></span>
              <span className="flex-grow text-center">
                Continue with Facebook
              </span>
            </NavLink>
            <NavLink className="border p-3 rounded-3xl w-full flex items-center">
              <span className="text-4xl"><FcGoogle/></span>
              <span className="flex-grow text-center">Continue with Google</span>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Register;
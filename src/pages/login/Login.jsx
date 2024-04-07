import { NavLink,useNavigate ,useLocation } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/"
  
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => navigate(form))
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-[1550px] w-[95%] md:w-[90%] mx-auto">\
    <Helmet>
        <title>Login</title>
      </Helmet>
      <nav className="md:pt-4">
        <Navbar color={"black"} />
      </nav>
      <div className="flex flex-col justify-center items-center py-6 md:py-12 space-y-4">
        <form className="flex flex-col border-2 border-[#ABABAB] rounded-lg p-8 md:min-w-[570px] space-y-5">
          <p className="font-bold text-2xl">Login</p>
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
          <div className="flex justify-between">
            <p className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-warning" />
              <label>Remember Me</label>
            </p>
            <NavLink className="text-[#F9A51A] underline">
              Forgot Password
            </NavLink>
          </div>
          <button className="bg-[#F9A51A] py-3 btn">Login</button>
          <div className="text-center">
            Dont have an account?
            <NavLink to="/register" className="text-[#F9A51A]">
              {" "}
              Create an account
            </NavLink>
          </div>
        </form>
        <div className="flex justify-center items-center gap-2">
          <p className="h-[1px] bg-[#AAA] md:w-[200px]"></p>
          <p>Or</p>
          <p className="h-[1px] bg-[#AAA] md:w-[200px]"></p>
        </div>
        <div className="flex flex-col md:min-w-[430px] space-y-2">
          <NavLink className="border p-3 rounded-3xl w-full flex items-center">
            <span className="text-4xl text-blue-700">
              <FaFacebook />
            </span>
            <span className="flex-grow text-center">
              Continue with Facebook
            </span>
          </NavLink>
          <NavLink
            onClick={handleGoogleSignIn}
            className="border p-3 rounded-3xl w-full flex items-center"
          >
            <span className="text-4xl">
              <FcGoogle />
            </span>
            <span className="flex-grow text-center">Continue with Google</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;

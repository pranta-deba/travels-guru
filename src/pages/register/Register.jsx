import { NavLink } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { googleSignIn,createUser } = useContext(AuthContext);
  const [errorMgs, setErrorMgs] = useState("");
  const navigate = useNavigate();

  const handleSubmitFrom = (e) => {
    setErrorMgs("");
    e.preventDefault();
    // const first_name = e.target.first_name.value;
    // const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    if (password !== confirm_password) {
      setErrorMgs("Password not match!");
      return;
    }
    createUser(email, password)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-[1550px] w-[95%] md:w-[90%] mx-auto">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <nav className="md:pt-4">
        <Navbar color={"black"} />
      </nav>
      <div className="flex flex-col justify-center items-center py-6 md:py-12 space-y-4">
        <form
          onSubmit={(e) => handleSubmitFrom(e)}
          className="flex flex-col border-2 border-[#ABABAB] rounded-lg p-8 md:min-w-[570px] space-y-5"
        >
          <p className="font-bold text-2xl">Create an account</p>
          <p className="text-center text-red-500 font-semibold">{errorMgs}</p>
          <label>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              required
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Username or Email"
              name="email"
              className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              required
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              required
              minLength={6}
            />
          </label>
          <label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              className="outline-none border-b-2 border-[#C5C5C5] py-2 w-full"
              required
              minLength={6}
            />
          </label>
          <button type="submit" className="bg-[#F9A51A] py-3 btn">
            Login
          </button>
          <div className="text-center">
            Already have an account?
            <NavLink to="/login" className="text-[#F9A51A]">
              {" "}
              Login
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
          <NavLink onClick={handleGoogleSignIn} className="border p-3 rounded-3xl w-full flex items-center">
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

export default Register;

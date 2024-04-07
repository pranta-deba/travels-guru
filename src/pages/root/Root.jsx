import { Outlet } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";

const Root = () => {
  const { bgImg } = useContext(AuthContext);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url('${
          bgImg || "/bg.png"
        }')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center",
      }}
      className={`text-white h-fit`}
    >
      <div className="max-w-[1550px] w-[95%] md:w-[95%] mx-auto">
        <nav className="md:pt-4">
          <Navbar color={"white"} />
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;

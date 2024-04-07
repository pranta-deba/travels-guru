import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";

const Banner = () => {
  const [allData, setAllData] = useState([]);
  const [showData, setShowData] = useState({});
  const [loader, setLoader] = useState(true);
  const {setBgImg} = useContext(AuthContext);
  useEffect(() => {
    fetch("/places.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setShowData(data[0]);
        setBgImg(data[0].image);
        setLoader(false);
      });
  }, [setBgImg]);
  
  const handleShowItem = (id) => {
    const findItem = allData.find((i) => i.id === id);
    setShowData(findItem);
    setBgImg(findItem.image);
  };
  if (loader) {
    return (
      <div className="py-12 flex justify-center h-screen">
        <p>Loading.....</p>
      </div>
    );
  }
  return (
    <div className="md:hero h-screen">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-8xl font-normal">{showData.place_name}</h1>
          <p className="text-base font-normal">{showData.description}</p>
          <NavLink
            to={`/booking/${showData.id}`}
            className="btn border-none items-center gap-2 justify-center font-medium bg-[#F9A51A] text-black py-4 px-7 rounded-lg inline-flex"
          >
            Booking <FaArrowRightLong />
          </NavLink>
        </div>
        <div className="flex-grow w-[300px] md:w-[700px]">
          <Swiper slidesPerView={3} spaceBetween={10}>
            {allData.map((item) => (
              <SwiperSlide
                key={item.id}
                className={
                  showData.id === item.id
                    ? "border-4 rounded-[20px] border-[#F9A51A] overflow-hidden"
                    : "overflow-hidden"
                }
                onClick={() => handleShowItem(item.id)}
              >
                <NavLink className="relative">
                  <img src={item.image} alt="" className="md:w-[270px] h-[200px] md:h-[416px] object-cover rounded-[20px]"/>
                  <p className="absolute bottom-2 left-2 text-[10px] md:text-2xl uppercase">
                    {item.place_name}
                  </p>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;

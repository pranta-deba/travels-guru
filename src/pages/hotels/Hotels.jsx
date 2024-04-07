import { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import { Helmet } from "react-helmet-async";
const Hotels = () => {
  const [maps, setMaps] = useState([]);
  const [userMaps, setUserMaps] = useState({});
  const { destination, form } = JSON.parse(localStorage.getItem("booking"));

  useEffect(() => {
    fetch("/maps.json")
      .then((res) => res.json())
      .then((data) => {
        setMaps(data);
      });
  }, []);

  useEffect(() => {
    const findMaps = maps.find((i) => i.location === destination);
    setUserMaps(findMaps);
  }, [maps, destination]);

  return (
    <div className="max-w-[1550px] w-[95%] md:w-[90%] mx-auto">
      <Helmet>
        <title>Hotels</title>
      </Helmet>
      <nav className="md:pt-4">
        <Navbar color={"black"} />
      </nav>
      <hr />
      <div className="flex flex-col md:flex-row py-3 gap-12">
        <div className="flex-1">
          <p className="text-[#2B2B2B]">252 stays {form} 3 guests</p>
          <h3 className="text-2xl font-bold mb-6">Stay in {destination}</h3>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-4 shadow-lg p-2">
              <img
                src="https://i.postimg.cc/Yq8cj3vd/executive-cottage.jpg"
                alt=""
                className="md:w-[270px] md:h-[188px] object-cover"
              />
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Light bright airy stylish apt & safe peaceful stay
                </h4>
                <p className="text-[#6A6A6A]">
                  4 guests 2 bedrooms 2 beds 2 baths
                </p>
                <p className="text-[#6A6A6A]">Wif Air conditioning Kitchen</p>
                <p className="text-[#6A6A6A]">
                  Cancellation fexibility availiable
                </p>
                <div className="flex justify-between">
                  <p className="font-medium">4.9 (20)</p>
                  <p className="font-medium">
                    $34/ <span className="text-[#6A6A6A]">night</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 shadow-lg p-2">
              <img
                src="https://i.postimg.cc/rm53TC6C/120397144.jpg"
                alt=""
                className="md:w-[270px] md:h-[188px] object-cover"
              />
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Light bright airy stylish apt & safe peaceful stay
                </h4>
                <p className="text-[#6A6A6A]">
                  4 guests 2 bedrooms 2 beds 2 baths
                </p>
                <p className="text-[#6A6A6A]">Wif Air conditioning Kitchen</p>
                <p className="text-[#6A6A6A]">
                  Cancellation fexibility availiable
                </p>
                <div className="flex justify-between">
                  <p className="font-medium">4.9 (20)</p>
                  <p className="font-medium">
                    $34/ <span className="text-[#6A6A6A]">night</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 shadow-lg p-2">
              <img
                src="https://i.postimg.cc/hj8y6Dx2/images.jpg"
                alt=""
                className="md:w-[270px] md:h-[188px] object-cover"
              />
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Light bright airy stylish apt & safe peaceful stay
                </h4>
                <p className="text-[#6A6A6A]">
                  4 guests 2 bedrooms 2 beds 2 baths
                </p>
                <p className="text-[#6A6A6A]">Wif Air conditioning Kitchen</p>
                <p className="text-[#6A6A6A]">
                  Cancellation fexibility availiable
                </p>
                <div className="flex justify-between">
                  <p className="font-medium">4.9 (20)</p>
                  <p className="font-medium">
                    $34/ <span className="text-[#6A6A6A]">night</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            className="w-full h-full"
            src={userMaps?.maps}
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

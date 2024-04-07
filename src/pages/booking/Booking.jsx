import {  useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams ,useNavigate} from "react-router-dom";

const Booking = () => {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [destination,setDestination] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch("/places.json")
      .then((res) => res.json())
      .then((data) => {
        const findData = data.find(item => item.id === +id);
        setData(findData);
        setDestination(findData.place_name);
        setLoader(false)
      });
  }, [id]);
  if (loader) {
    return (
      <div className="py-12 flex justify-center h-screen">
        <p>Loading.....</p>
      </div>
    );
  }

  const handleBooking = e => {
    e.preventDefault();
    const origin = e.target.origin.value;
    const destination = e.target.destination.value;
    const form = e.target.form.value;
    const to = e.target.to.value;
    const getLocal = localStorage.getItem('booking');
    if (getLocal) {
      localStorage.removeItem('booking');
    }
    localStorage.setItem('booking', JSON.stringify({origin,destination,form,to}));
    navigate("/hotels")
  }
  return (
    <div className="md:hero md:h-screen">
      <Helmet>
        <title>Booking</title>
      </Helmet>
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <div className="space-y-8 flex-1">
          <h1 className="text-5xl md:text-8xl font-normal">{Data.place_name}</h1>
          <p className="text-base font-normal">
          {Data.description}
          </p>
        </div>
        <div className="flex-1">
          <form onSubmit={handleBooking} className="bg-white text-black p-12 space-y-3 rounded-md">
            <p>Origin</p>
                <input type="text" name="origin" className="bg-[#F2F2F2] p-3 w-full text-base font-bold" placeholder="Your address" required/>
            <p>Destination</p>
                <input onChange={(e) => {
                  setDestination(e.target.value)
                }} type="text" name="destination" className="bg-[#F2F2F2] p-3 w-full text-base font-bold" value={destination} required/>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <p>Form</p>
                    <input type="date" name="form" className="bg-[#F2F2F2] p-3 w-full text-base font-bold" required/>
              </div>
              <div className="flex-1">
                <p>To</p>
                    <input type="date" name="to" className="bg-[#F2F2F2] p-3 w-full text-base font-bold" required/>
              </div>
            </div>
            <button
            type="submit"
            className="btn border-none w-full font-medium bg-[#F9A51A] text-black py-4 px-7 rounded-lg"
          >
           Start Booking
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;

import { Helmet } from "react-helmet-async";

const Destination = () => {
  return (
    <div>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <div className="py-12 flex justify-center h-screen">
        <p>Loading.....</p>
      </div>
    </div>
  );
};

export default Destination;

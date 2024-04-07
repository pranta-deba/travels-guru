import { Helmet } from "react-helmet-async";
import Navbar from "../../component/navbar/Navbar";
const Search = () => {
  return (
    <div className="max-w-[1550px] w-[95%] md:w-[90%] mx-auto">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <nav className="md:pt-4">
        <Navbar color={"black"} />
      </nav>
      <hr />
      <div>
        
      </div>
    </div>
  );
};

export default Search;

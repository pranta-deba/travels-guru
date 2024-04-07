import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="py-12 flex justify-center h-screen">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <p>Loading.....</p>
    </div>
  );
};

export default Blog;

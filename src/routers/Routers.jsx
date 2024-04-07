import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Booking from "../pages/booking/Booking";
import Register from "../pages/register/Register";
import Search from "../pages/search/Search";
import Hotels from "../pages/hotels/Hotels";
import Private from "./Private";
import Destination from "../pages/destination/Destination";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/hotels",
    element: <Private><Hotels /></Private>,
  },
]);

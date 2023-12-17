import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import GetQuote from "../pages/GetQuote/GetQuote";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "../providers/PrivateRoutes";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/getQuote",
        element: (
          <PrivateRoutes>
            <GetQuote />
          </PrivateRoutes>
        ),
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoutes>
            <Pricing />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

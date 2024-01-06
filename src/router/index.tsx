import Error from "../pages/Error";
import Layout from "../pages/Layout";
import Landing from "../pages/Landing";
import AppPrivateRoute from "./AppPrivateRoute";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      // Public routes
      {
        path: "/landing",
        element: <Landing />,
      },
      // Private routes
      {
        element: <AppPrivateRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;

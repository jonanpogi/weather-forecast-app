import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

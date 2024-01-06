import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

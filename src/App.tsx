import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import AppPrivateRoute from "./components/AppPrivateRoute";
import Home from "./pages/Home";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import constants from "./utils/constants";

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

const App = () => {
  const onRedirectCallback = (appState?: AppState) => {
    router.navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={constants.VITE_AUTH0_DOMAIN}
      clientId={constants.VITE_AUTH0_CLIENT_ID}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <RouterProvider router={router} />;
    </Auth0Provider>
  );
};

export default App;

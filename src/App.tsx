import { RouterProvider } from "react-router-dom";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import constants from "./utils/constants";
import router from "./router";

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

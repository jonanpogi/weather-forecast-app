import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const AppPrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("isLoading:", isLoading);

    if (!isAuthenticated && !isLoading) {
      navigate("/landing");
    }
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return <Outlet />;
};

export default AppPrivateRoute;

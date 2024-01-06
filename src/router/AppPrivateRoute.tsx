import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress, Stack } from "@mui/material";

const AppPrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/landing");
    }
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) {
    return (
      <Stack justifyContent="center" alignItems="center" flexGrow={1}>
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  return <Outlet />;
};

export default AppPrivateRoute;

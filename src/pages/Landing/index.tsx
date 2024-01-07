import { Stack, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, isLoading]);

  return (
    <Stack
      flexGrow={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      <Typography variant="h5">
        Welcome to the weather forecast web application!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 5,
        }}
      >
        Please login with your Github user to use application and view the
        weather in your city.
      </Typography>
      <AppButton variant="contained" onClick={() => loginWithRedirect()}>
        Login
      </AppButton>
    </Stack>
  );
};

export default Landing;

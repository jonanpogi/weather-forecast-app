import { Stack, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";

const Landing = () => {
  return (
    <Stack
      flexGrow={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
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
      <AppButton variant="contained">Login</AppButton>
    </Stack>
  );
};

export default Landing;

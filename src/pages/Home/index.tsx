import { useAuth0 } from "@auth0/auth0-react";
import { Link, Stack, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";
import AppTextField from "../../components/AppTextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Home = () => {
  const { user } = useAuth0();
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const errorMessage = error ? "City is required" : "";

  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length > 0) {
      setError(false);
    }

    setCity(value);
  };

  const displayWeather = () => {
    if (!city) {
      setError(true);
      return;
    }

    console.log("Display weather for city:", city);
  };

  return (
    <Stack justifyContent="flex-start" alignItems="center" flexGrow={1}>
      <Typography variant="h5" gutterBottom marginTop={10}>
        {user?.name}
      </Typography>
      <Link
        href={`https://github.com/${user?.nickname}`}
        variant="body1"
        underline="hover"
        color="inherit"
        marginBottom={15}
      >
        {`https://github.com/${user?.nickname}`}
      </Link>
      <AppTextField
        error={error}
        helperText={errorMessage}
        value={city}
        onChange={onChangeCity}
        placeholder="City"
        marginBottom={2}
        iconStart={
          <SearchIcon style={{ color: "rgba(255, 255, 255, 0.87)" }} />
        }
      />
      <AppButton variant="contained" onClick={displayWeather}>
        Display Weather
      </AppButton>
    </Stack>
  );
};

export default Home;

import { useAuth0 } from "@auth0/auth0-react";
import { Link, Stack, Typography } from "@mui/material";
import AppButton from "../../components/AppButton";
import AppTextField from "../../components/AppTextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import constants from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth0();
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length > 0) {
      setErrorMessage("");
    }

    setCity(value);
  };

  const displayWeather = async () => {
    if (city.length > 0) {
      setErrorMessage("");
    }

    if (!city) {
      setErrorMessage("City is required");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${constants.VITE_WEATHER_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      navigate("/weather", { state: { data } });
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
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
        error={errorMessage.length > 0}
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

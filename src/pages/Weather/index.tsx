import { Alert, AlertTitle, CircularProgress, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AppTable from "../../components/AppTable";
import { useEffect, useState } from "react";
import AppButton from "../../components/AppButton";
import constants from "../../utils/constants";

export type IWeatherData = {
  date: string;
  temp: number;
  description: string;
  main: string;
  pressure: number;
  humidity: number;
};

const HEADERS = ["Date", "Temp", "Description", "Main", "Pressure", "Humidity"];

const Weather = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [rows, setRows] = useState<IWeatherData[]>([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const getCurrentWeather = async () => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${state.geocode.lat}&lon=${state.geocode.lon}&appid=${constants.VITE_WEATHER_API_KEY}&units=metric`;

      const response = await fetch(url);

      // validate response status
      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      // validate response data
      if (!data) {
        throw new Error();
      }

      const weatherData = {
        date: new Date().toLocaleDateString(),
        temp: data.main.temp,
        description: data.weather[0].description,
        main: data.weather[0].main,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };

      setRows([{ ...weatherData }]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ("geocode" in state && state) {
      getCurrentWeather();
    }
  }, [state]);

  console.log(state);

  return (
    <Stack
      flexGrow={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong while fetching the weather data.
        </Alert>
      )}
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <AppTable
            headers={HEADERS}
            rows={rows}
            style={{
              marginBottom: 20,
            }}
          />
          <AppButton
            variant="contained"
            onClick={goBack}
            style={{ alignSelf: "flex-end" }}
          >
            go back
          </AppButton>
        </>
      )}
    </Stack>
  );
};

export default Weather;

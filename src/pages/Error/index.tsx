import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorMessage;

  if (error && typeof error === "object") {
    errorMessage =
      "statusText" in error
        ? error.statusText
        : "message" in error
        ? error.message
        : "";
  }

  return (
    <Box
      id="error"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Oops...
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="subtitle2" style={{ fontStyle: "italic" }}>
        <i>{errorMessage as string}</i>
      </Typography>
    </Box>
  );
};

export default Error;

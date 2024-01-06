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
    <div style={{textAlign: "center"}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage as string}</i>
      </p>
    </div>
  );
};

export default Error;

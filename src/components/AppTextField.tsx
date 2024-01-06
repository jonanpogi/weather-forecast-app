import { TextField, TextFieldProps } from "@mui/material";

type Props = {
  iconStart?: React.ReactNode;
  marginBottom?: number;
} & TextFieldProps;

const AppTextField = ({ iconStart, marginBottom, ...props }: Props) => {
  return (
    <TextField
      InputProps={{ startAdornment: iconStart }}
      {...props}
      inputProps={{
        sx: {
          borderRadius: 20,
          color: "rgba(255, 255, 255, 0.87)",
        },
      }}
      sx={{
        width: "40%",
        marginBottom,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: 18,
            borderColor: "#4C4C4C",
          },
          "&:hover fieldset": {
            borderColor: "#E0E0E0",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#287174",
          },
        },
      }}
    />
  );
};

export default AppTextField;

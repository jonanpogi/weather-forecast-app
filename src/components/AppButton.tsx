import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppButton = styled(Button)({
  backgroundColor: "#4C4C4C",
  ":hover": {
    backgroundColor: "#4C4C4C",
    boxShadow:
      "0 8px 16px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
  },
});

export default AppButton;

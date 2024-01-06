import { Toolbar, AppBar, Box, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import CloudIcon from "@mui/icons-material/Cloud";
import AppButton from "../../components/AppButton";

const Layout = () => {
  return (
    <Box id="layout">
      <AppBar
        position="static"
        style={{
          backgroundColor: "#242424",
          borderBottom: "3px solid #ccc",
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
          }}
        >
          <Stack flexDirection="row" alignItems="center">
            <CloudIcon
              fontSize="large"
              sx={{
                marginRight: 2,
              }}
            />
            <Typography variant="h6">Weather Forecast</Typography>
          </Stack>
          <AppButton variant="contained">LOGOUT</AppButton>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;

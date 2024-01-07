import { Toolbar, AppBar, Box, Stack, Typography, Hidden } from "@mui/material";
import { Outlet } from "react-router-dom";
import CloudIcon from "@mui/icons-material/Cloud";
import AppButton from "../../components/AppButton";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
  const { logout, isAuthenticated } = useAuth0();

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
            <Hidden smDown>
              <Typography variant="h6">Weather Forecast</Typography>
            </Hidden>
          </Stack>
          {isAuthenticated && (
            <AppButton
              variant="contained"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </AppButton>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;

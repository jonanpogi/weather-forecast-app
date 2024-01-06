import { Toolbar, AppBar, Button, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import CloudIcon from "@mui/icons-material/Cloud";

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
          <CloudIcon fontSize="large" />
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;

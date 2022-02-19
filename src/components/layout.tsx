import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { theme } from "../theme";

const drawerWidth = 256;

export const Layout = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <Box>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Navbar
            onDrawerToggle={function (): void {
              console.log("Drawer toggle");
            }}
          />
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

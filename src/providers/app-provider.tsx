import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import { theme } from "../theme";
import { SnackbarProvider } from "notistack";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

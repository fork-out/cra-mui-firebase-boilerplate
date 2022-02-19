import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useLocation } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  UserCredential,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

import { auth } from "../../firebase";
import { useAuth } from "../../hooks/useAuth";
import { useSnackbar } from "notistack";

const theme = createTheme();

export const Login = () => {
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser, setCurrentUser } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const from = (location?.state as any)?.from?.pathname || "/";

  if (currentUser && !loading) {
    return <Navigate to={from} />;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const email = data.get("email") as string;
      const password = data.get("password") as string;
      const result: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      if (user) {
        setCurrentUser(user);
        enqueueSnackbar("Successfully logged in.", { variant: "success" });
      }
    } catch (e) {
      const error = e as FirebaseError;
      console.error(error);
      if (error.message.includes("user-not-found")) {
        enqueueSnackbar("User doesn't exist. Contact your administrator.", {
          variant: "error",
        });
      } else {
        enqueueSnackbar("Invalid credentials. Please try again.", {
          variant: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

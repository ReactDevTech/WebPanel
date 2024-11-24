import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Layout/Wrapper.tsx";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper backgroundType="dashboard" maxWidth={false} withPaper={false}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="login-box">
          <Paper elevation={3} className="login-paper">
            <Avatar className="login-avatar">
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" className="login-title">
              Login
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="login-form"
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
                value={formData.email}
                onChange={handleChange}
                className="form-field"
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
                value={formData.password}
                onChange={handleChange}
                className="form-field"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                className="submit-button"
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Sign In"
                )}
              </Button>

              <Grid container spacing={2} className="links-container">
                <Grid item xs>
                  <Link
                    component={RouterLink}
                    to="/forgot-password"
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Login;

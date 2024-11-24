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
  Alert,
  Collapse,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import CircularProgress from "@mui/material/CircularProgress";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Wrapper from "../../components/Layout/Wrapper.tsx";
import "./ForgotPassword.css";

interface ForgotPasswordState {
  loading: boolean;
  email: string;
  emailSent: boolean;
  error: string;
}

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<ForgotPasswordState>({
    loading: false,
    email: "",
    emailSent: false,
    error: "",
  });

  const { loading, email, emailSent, error } = state;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setState((prev) => ({ ...prev, error: "", loading: true }));

    try {
      // Add your password reset logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setState((prev) => ({ ...prev, emailSent: true }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: "Failed to send reset email. Please try again.",
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState((prev) => ({ ...prev, email: e.target.value }));
  };

  return (
    <Wrapper backgroundType="dashboard" maxWidth={false} withPaper={false}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="forgot-password-box">
          <Paper elevation={3} className="forgot-password-paper">
            <Avatar className="forgot-password-avatar">
              <LockResetIcon />
            </Avatar>

            <Typography
              component="h1"
              variant="h5"
              className="forgot-password-title"
            >
              Forgot Password
            </Typography>

            <Collapse in={!!error}>
              <Alert severity="error" className="alert-message">
                {error}
              </Alert>
            </Collapse>

            <Collapse in={emailSent}>
              <Alert severity="success" className="alert-message">
                Password reset instructions have been sent to your email.
              </Alert>
            </Collapse>

            {!emailSent ? (
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                className="forgot-password-form"
              >
                <Typography variant="body2" className="description-text">
                  Enter your email address and we'll send you instructions to
                  reset your password.
                </Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
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
                    "Send Reset Link"
                  )}
                </Button>
              </Box>
            ) : (
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/login")}
                className="submit-button"
              >
                Return to Login
              </Button>
            )}

            <Button
              startIcon={<ArrowBackIcon />}
              component={RouterLink}
              to="/login"
              className="back-button"
            >
              Back to Login
            </Button>
          </Paper>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;

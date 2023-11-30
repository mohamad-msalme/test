import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import emailSrc from "../../../icons/emailIcon.svg";
import securitySrc from "../../../icons/security.svg";
import eyeSrc from "../../../icons/eye.svg";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  return (
    <div className="sign-left-side">
      <form className="sign-form">
        <div className="header">
          <Typography
            className="title"
            sx={{
              fontSize: "3.2rem",
              fontWeight: 700,
            }}
          >
            Welcome to Socialha 👋🏼
          </Typography>
          <Typography
            className="description"
            sx={{
              fontSize: "2rem",
              fontWeight: 400,
            }}
          >
            Please enter your information below
          </Typography>
        </div>

        <div className="fields">
          <div className="fields-box">
            <TextField
              className="text-input"
              variant="filled"
              fullWidth
              type="email"
              placeholder="Please enter your email"
              InputProps={{
                startAdornment: <img src={emailSrc} />,
                disableUnderline: true,
              }}
            />
            <TextField
              className="text-input"
              variant="filled"
              fullWidth
              type="password"
              placeholder="Please enter your password"
              InputProps={{
                startAdornment: <img src={securitySrc} />,
                endAdornment: <img src={eyeSrc} />,
                disableUnderline: true,
              }}
            />
            <div>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
                sx={{
                  marginInlineStart: "0.5rem",
                }}
              />
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <Button
            onClick={() => {
              login();
              navigate("/posts/managment");
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign in
          </Button>
          <div className="footer">
            <Typography>
              Don’t you have an account? <span>Sign up</span>
            </Typography>
          </div>
        </div>
      </form>
    </div>
  );
};

export { SignInForm as default };

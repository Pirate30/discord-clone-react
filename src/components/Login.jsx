import { Button } from "@mui/material";
import React from "react";
import "./Login.css";

import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login__logo">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
          alt="discordLogo"
        />
      </div>

      <Button className="button" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;

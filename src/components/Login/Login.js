import React from "react";
import "./Login.css";
import spotifyLogo from "../../images/spotifyLogo.jpg";
import { accessUrl } from "../Spotify";

function Login() {
  return (
    <div className="login">
      <img src={spotifyLogo} alt="Spotify-Logo" />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;

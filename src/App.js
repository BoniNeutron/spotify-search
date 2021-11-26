import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromResponse } from "./components/Spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">{token ? <Player token={token} /> : <Login />}</div>
  );
}

export default App;

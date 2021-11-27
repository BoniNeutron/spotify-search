import { useEffect, useState } from "react";
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

  return token ? <Player token={token} /> : <Login />;
}

export default App;

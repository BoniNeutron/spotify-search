import { useState, useEffect } from "react";
import "./Player.css";

function Player({ token }) {
  const [page, setPage] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.track.value) {
      setSearch(undefined);
    } else {
      setSearch(e.currentTarget.track.value);
    }
  };

  useEffect(() => {
    if (token) {
      fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=track&offset=${
          page * 20
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setTracks(data.tracks);
          console.log(data.tracks);
        });
    }
  }, [token, page, search]);

  return (
    <div className="contPlayer">
      <form className="form" onSubmit={handleOnSubmit}>
        <input type="text" name="track" placeholder="Search Song" />
        <button>Search</button>
      </form>
      {search && (
        <div>
          <div className="bttsPages">
            {page === 0 ? null : (
              <button onClick={() => setPage(page - 1)}>Pevious Page</button>
            )}
            <button onClick={() => setPage(0)}>1</button>
            <button onClick={() => setPage(1)}>2</button>
            <button onClick={() => setPage(2)}>3</button>
            <button onClick={() => setPage(page + 1)}>Next Page</button>
          </div>
          {tracks.items.map((nameTrack, index) => {
            return (
              <div className="contTrack" key={index}>
                <img src={tracks.items[index].album.images[0].url} alt="img" />
                <div className="textTrack">
                  <h1>{nameTrack.name}</h1>
                  <p>Artista: {tracks.items[index].album.artists[0].name}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Player;

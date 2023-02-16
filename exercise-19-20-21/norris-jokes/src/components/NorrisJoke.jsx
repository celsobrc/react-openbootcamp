import React, { useState } from "react";
import { getRandomJoke } from "../services/AxiosService";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const NorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  const newRandomJoke = () => {
    setLike(0);
    setUnlike(0);
    getRandomJoke()
      .then((response) => {
        if (response.status === 200) {
          setJoke(response.data);
        } else {
          console.log(`Error in request: ${response.value}`);
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`));
  };

  function incrementLikes() {
    setLike(like + 1);
  }

  function incrementUnlikes() {
    setUnlike(unlike + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Norris Joke</h1>
      {joke === null ? (
        <div>
          <p>Please Generate a New Joke</p>
        </div>
      ) : (
        <div>
          {/* <img alt="Joke Icon" src={joke.icon_url}></img> */}
          <h3>Joke ID: {joke.id}</h3>
          <p>{joke.value}</p>
          <div style={{ display: "-ms-inline-flexbox" }}>
            <ThumbUpIcon onClick={incrementLikes} color="success"></ThumbUpIcon>
            <span>{like}</span>
            <ThumbDownIcon
              onClick={incrementUnlikes}
              color="error"
              style={{ marginLeft: "70px" }}
            >
              {{ unlike }}
            </ThumbDownIcon>
            <span>{unlike}</span>
          </div>
        </div>
      )}
      <div>
        <button onClick={newRandomJoke} style={{ marginTop: "40px" }}>
          Random Joke
        </button>
      </div>
    </div>
  );
};

export default NorrisJoke;

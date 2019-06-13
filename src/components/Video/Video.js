import React, { useState } from "react";
import Youtube from "react-youtube";
import styles from "./Video.module.css";

export default function Video(props) {
  const { id, setPlayer, load, width } = props;
  const [loaded, setLoaded] = useState(false);
  const options = {
    /* Temp */
    height: width * 0.5625,
    width: width,
    playerVars: {
      allowFullScreen: 1,
      controls: 0,
      frameBorder: 0
    }
  };

  const onReadyHandler = e => {
    setPlayer(e.target);
    setLoaded(true);
  };

  return (
    <>
      {load ? (
        <Youtube
          className={styles.youTube}
          videoId={id}
          opts={options}
          onReady={e => onReadyHandler(e)}
          className={styles.body}
        />
      ) : null}
    </>
  );
}
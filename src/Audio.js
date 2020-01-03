import React, { useState, useEffect } from "react";
import PlayIcon from "./play.svg";
import PauseIcon from "./pause.svg";

const PLAY = 0;
const PAUSE = 1;

const iconStyle = {
  cursor: "pointer"
};

const sound = new window.Audio();

/*

Props:
- audioUrl: the URL of the audio file to play. The audio files need to be publicly accessible.
  Tested with MP3 files, but should work with other browser supported audio files too.
- iconWidth: the width of the icon
- iconHeight: the height of the icon

*/
function Audio(props) {
  const [iconState, setIconState] = useState(PLAY);

  const endedListener = () => {
    setIconState(PLAY);
  };

  useEffect(() => {
    sound.src = props.audioUrl;
    sound.addEventListener("ended", endedListener);

    return () => {
      sound.removeEventListener("ended", endedListener);
    };
  }, [sound]);

  const play = () => {
    if (iconState === PLAY) {
      sound.play();
      setIconState(PAUSE);
    } else {
      sound.pause();
      setIconState(PLAY);
    }
  };

  return (
    <>
      <img
        style={iconStyle}
        onClick={play}
        src={iconState === PLAY ? PlayIcon : PauseIcon}
        width={props.iconWidth}
        height={props.iconHeight}
      ></img>
    </>
  );
}

export default Audio;

import React from "react";
import PlayIcon from "./play.svg";
import PauseIcon from "./pause.svg";

const PLAY = 0;
const PAUSE = 1;

const iconStyle = {
  cursor: "pointer",
  margin: "0"
};

/*

Audio

Props:
- audioUrl: the URL of the audio file to play. The audio files need to be publicly accessible.
  Tested with MP3 files, but should work with other browser supported audio files too.
- iconWidth: the width of the icon
- iconHeight: the height of the icon

*/
class Audio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconState: PLAY
    };

    this.sound = null;
    this.play = this.play.bind(this);
    this.playKey = this.playKey.bind(this);
    this.endedListener = this.endedListener.bind(this);
  }

  componentWillUnmount() {
    if (this.sound) {
      this.sound.removeEventListener("ended", this.endedListener);
    }
  }

  endedListener() {
    this.setState({ iconState: PLAY });
  }

  initializeAudio() {
    this.sound = new window.Audio();
    this.sound.src = this.props.audioUrl;
    this.sound.addEventListener("ended", this.endedListener);
  }

  playKey(evt) {
    // enter pressed, then play/pause audio
    if (evt.keyCode === 13) {
      this.play();
    }
  }

  play() {
    if (this.state.iconState === PLAY) {
      if (!this.sound) {
        this.initializeAudio();
      }
      this.sound.play();
      this.setState({ iconState: PAUSE });
    } else {
      if (!this.sound) {
        this.initializeAudio();
      }
      this.sound.pause();
      this.setState({ iconState: PLAY });
    }
  }

  render() {
    return (
      <>
        <span
          onKeyDown={this.playKey}
          tabIndex="0"
          onClick={this.play}
          style={iconStyle}
        >
          {this.props.children}
          <img
            src={this.state.iconState === PLAY ? PlayIcon : PauseIcon}
            width={this.props.iconWidth}
            height={this.props.iconHeight}
            alt="play audio"
          ></img>
        </span>
      </>
    );
  }
}

export default Audio;

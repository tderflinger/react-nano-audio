import React from "react";
import PlayIcon from "./play.svg";
import PauseIcon from "./pause.svg";

const PLAY = 0;
const PAUSE = 1;

const iconStyle = {
  cursor: "pointer"
};

const sound = new window.Audio();

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

    this.play = this.play.bind(this);
    this.endedListener = this.endedListener.bind(this);
  }

  componentDidMount() {
    sound.src = this.props.audioUrl;
    sound.addEventListener("ended", this.endedListener);
  }

  componentWillUnmount() {
    sound.removeEventListener("ended", this.endedListener);
  }

  endedListener() {
    this.setState({ iconState: PLAY });
  }

  play() {
    if (this.state.iconState === PLAY) {
      sound.play();
      this.setState({ iconState: PAUSE });
    } else {
      sound.pause();
      this.setState({ iconState: PLAY });
    }
  }

  render() {
    return (
      <>
        <img
          style={iconStyle}
          onClick={this.play}
          src={this.state.iconState === PLAY ? PlayIcon : PauseIcon}
          width={this.props.iconWidth}
          height={this.props.iconHeight}
        ></img>
      </>
    );
  }
}

export default Audio;

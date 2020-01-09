import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

const img = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmkgYmktcGxheSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjgwNCAxMEw3IDYuNjMzdjYuNzM0TDEyLjgwNCAxMHptLjc5Mi0uNjk2YS44MDIuODAyIDAgMDEwIDEuMzkybC02LjM2MyAzLjY5MkM2LjcxMyAxNC42OSA2IDE0LjM0NSA2IDEzLjY5MlY2LjMwOGMwLS42NTMuNzEzLS45OTggMS4yMzMtLjY5Nmw2LjM2MyAzLjY5MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=';

const img$1 = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmkgYmktcGF1c2UiIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9ImN1cnJlbnRDb2xvciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDUuNWEuNS41IDAgMDEuNS41djhhLjUuNSAwIDAxLTEgMFY2YS41LjUgMCAwMS41LS41em00IDBhLjUuNSAwIDAxLjUuNXY4YS41LjUgMCAwMS0xIDBWNmEuNS41IDAgMDEuNS0uNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=';

var PLAY = 0;
var PAUSE = 1;
var iconStyle = {
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

var Audio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio(props) {
    var _this;

    _classCallCheck(this, Audio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Audio).call(this, props));
    _this.state = {
      iconState: PLAY
    };
    _this.sound = null;
    _this.play = _this.play.bind(_assertThisInitialized(_this));
    _this.endedListener = _this.endedListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Audio, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.sound) {
        this.sound.removeEventListener("ended", this.endedListener);
      }
    }
  }, {
    key: "endedListener",
    value: function endedListener() {
      this.setState({
        iconState: PLAY
      });
    }
  }, {
    key: "initializeAudio",
    value: function initializeAudio() {
      this.sound = new window.Audio();
      this.sound.src = this.props.audioUrl;
      this.sound.addEventListener("ended", this.endedListener);
    }
  }, {
    key: "play",
    value: function play() {
      if (this.state.iconState === PLAY) {
        if (!this.sound) {
          this.initializeAudio();
        }

        this.sound.play();
        this.setState({
          iconState: PAUSE
        });
      } else {
        if (!this.sound) {
          this.initializeAudio();
        }

        this.sound.pause();
        this.setState({
          iconState: PLAY
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("span", {
        onClick: this.play,
        style: iconStyle
      }, this.props.children, React.createElement("img", {
        src: this.state.iconState === PLAY ? img : img$1,
        width: this.props.iconWidth,
        height: this.props.iconHeight,
        alt: "play audio"
      })));
    }
  }]);

  return Audio;
}(React.Component);

export default Audio;
//# sourceMappingURL=index.es.js.map

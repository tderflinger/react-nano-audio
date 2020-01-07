# react-nano-audio

A minimalistic audio playing component for React.

The player can start, pause and resume the playing of the audio file.

Looks like this: ![audio](./src/play.svg)

## Installation

## Usage

Element usage example:

```jsx
import Audio from "react-nano-audio";

<Audio audioUrl="https://example.com/test.mp3" iconWidth="18px" iconHeight="18px">
```

Props:

- audioUrl [string]: the URL of the audio file to play. The audio file needs to be publicly accessible.
  Tested with MP3 files, but should work with other browser supported audio files too.
- iconWidth [string]: the width of the icon
- iconHeight [string]: the height of the icon

## Building

Go to the react-nano-audio directory and call:

```bash
npm run build
```

## Storybook

To invoke Storybook run:

```bash
npm run storybook
```

## References

For the play and pause buttons react-nano-audio uses the Bootstrap icons
play and pause.

This component builds upon the following projects:

- [React](https://reactjs.org/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Storybook](https://storybook.js.org/)
- [Rollup](https://rollupjs.org)
- [Babel](https://babeljs.io/)

## License

MIT license

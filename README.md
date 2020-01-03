# react-nano-audio

A minimalistic audio playing component for React.

Looks like this: ![audio](./src/play.svg)

## Installation

## Component

Element usage example:

```jsx
<Audio audioUrl="https://example.com/test.mp3" iconWidth="18px" iconHeight="18px">
```

Props:

- audioUrl: the URL of the audio file to play. The audio files need to be publicly accessible.
  Tested with MP3 files, but should work with other browser supported audio files too.
- iconWidth: the width of the icon
- iconHeight: the height of the icon

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

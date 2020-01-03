import babel from "rollup-plugin-babel";
import image from "@rollup/plugin-image";
import jsx from "rollup-plugin-jsx";

export default {
  input: "src/Audio.js",
  output: {
    dir: "output",
    format: "esm"
  },
  plugins: [
    jsx({ factory: "React.createElement" }),
    image(),
    babel({
      runtimeHelpers: true
    })
  ]
};

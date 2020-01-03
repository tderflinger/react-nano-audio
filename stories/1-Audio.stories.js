import React from "react";
import { action } from "@storybook/addon-actions";
import Audio from "../src/Audio";

export default {
  title: "Audio"
};

export const icon = () => (
  <p>
    Audio:
    <Audio
      audioUrl="https://www.danublue.com/test.mp3"
      iconWidth="18px"
      iconHeight="18px"
    ></Audio>
  </p>
);

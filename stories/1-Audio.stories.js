import React from "react";
import { action } from "@storybook/addon-actions";
import Audio from "../src/Audio";

export default {
  title: "Audio"
};

export const icon = () => (
  <p>
    <Audio
      audioUrl="https://www.danublue.com/5dee49d9af9fb5002c765b7d/5df3d8e2aa6c2e001e5d81ad.mp3"
      iconWidth="25px"
      iconHeight="25px"
    >
      Audio
    </Audio>
  </p>
);

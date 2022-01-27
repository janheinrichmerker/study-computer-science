import { env } from "process";
import { StoryPlayerProps } from "./components";
import { EventType, Side } from "./model";

import video4k from "./video/study-computer-science-4k.mp4";
import videoFullHd from "./video/study-computer-science-fullhd.mp4";

export const config: StoryPlayerProps = {
  url: env.CI ? videoFullHd : video4k,
  story: [
    // Task 1: Logic Gates
    {
      type: EventType.Choice,
      time: 276.1 + 5, // 5 seconds after the task is shown on screen.
      top: {
        side: Side.Top,
        title: "Aktiv",
        destination: 286.1,
      },
      bottom: {
        side: Side.Bottom,
        title: "Nicht Aktiv",
        destination: 289.6,
      },
    },
    {
      type: EventType.Jump,
      time: 289.5,
      destination: 311.8,
    },
    // Task 2: Binary Numbers
    {
      type: EventType.Choice,
      time: 385.2 + 5, // 5 seconds after the task is shown on screen.
      top: {
        side: Side.Top,
        title: "21",
        destination: 395.1,
      },
      bottom: {
        side: Side.Bottom,
        title: "23",
        destination: 420.3,
      },
    },
    {
      type: EventType.Jump,
      time: 420.2,
      destination: 438.7,
    },
    // Task 3: Pseudocode
    {
      type: EventType.Choice,
      time: 564.6,
      top: {
        side: Side.Top,
        title: "IF",
        destination: 587.8,
      },
      bottom: {
        side: Side.Bottom,
        title: "WHILE",
        destination: 574.4,
      },
    },
    {
      type: EventType.Jump,
      time: 587.7,
      destination: 602.2,
    },
  ],
};

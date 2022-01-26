import { StoryPlayerProps } from "./components";
import { EventType, Side } from "./model";

export const config: StoryPlayerProps = {
  url: "../video/Informatik studienren 2 - 4K.mp4",
  story: [
    // {
    //   type: EventType.Jump,
    //   time: 1,
    //   destination: 613,
    // },

    // Erste Aufgabe
    {
      type: EventType.Choice,
      time: 303,
      left: {
        side: Side.Left,
        title: "Aktiv",
        destination: 313.5,
      },
      right: {
        side: Side.Right,
        title: "Nicht Aktiv",
        destination: 317,
      },
    },
    {
      type: EventType.Jump,
      time: 316.5,
      destination: 339,
    },
    // Zweite Aufgabe
    {
      type: EventType.Choice,
      time: 415,
      left: {
        side: Side.Left,
        title: "21",
        destination: 422.5,
      },
      right: {
        side: Side.Right,
        title: "31",
        destination: 448,
      },
    },
    {
      type: EventType.Jump,
      time: 447,
      destination: 466,
    },
    // Dritte Aufgabe
    {
      type: EventType.Choice,
      time: 595,
      left: {
        side: Side.Left,
        title: "IF",
        destination: 615.3,
      },
      right: {
        side: Side.Right,
        title: "WHILE",
        destination: 602,
      },
    },
    {
      type: EventType.Jump,
      time: 614.5,
      destination: 629.5,
    },
  ],
};

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
      top: {
        side: Side.Top,
        title: "Aktiv",
        destination: 313.5,
      },
      bottom: {
        side: Side.Bottom,
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
      top: {
        side: Side.Top,
        title: "21",
        destination: 422.5,
      },
      bottom: {
        side: Side.Bottom,
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
      top: {
        side: Side.Top,
        title: "IF",
        destination: 615.3,
      },
      bottom: {
        side: Side.Bottom,
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

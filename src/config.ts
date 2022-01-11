import { StoryPlayerProps } from "./components";
import { EventType, Side } from "./model";

export const config: StoryPlayerProps = {
  url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  story: [
    {
      type: EventType.Choice,
      time: 2.5,
      left: {
        side: Side.Left,
        title: "Example option A",
        destination: 2.5,
      },
      right: {
        side: Side.Right,
        title: "Example option B",
        destination: 5,
      },
    },
    {
      type: EventType.Jump,
      time: 5,
      destination: 9,
    },
  ],
};

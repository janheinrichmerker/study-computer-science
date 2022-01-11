import { FunctionComponent } from "react";
import ReactPlayer from "react-player/lazy";
import { Choice, ChoiceEvent, EventType, Side, StoryEvent } from "../model";

function optionClassName(side: Side): string {
  switch (side) {
    case Side.Left:
      return "player-option-left";
    case Side.Right:
      return "player-option-right";
  }
}
function optionChoice(side: Side, event: ChoiceEvent): Choice {
  switch (side) {
    case Side.Left:
      return event.left;
    case Side.Right:
      return event.right;
  }
}

export const OptionButton: FunctionComponent<{
  side: Side;
  currentEvent: StoryEvent | undefined;
  player: ReactPlayer | undefined;
}> = ({ side, currentEvent, player }) => {
  if (currentEvent === undefined || currentEvent.type !== EventType.Choice) {
    return null;
  }
  const className = optionClassName(side);
  const choice = optionChoice(side, currentEvent);
  return (
    <button
      className={className}
      onClick={() => {
        player?.seekTo(choice.destination);
      }}
    >
      {choice.title}
    </button>
  );
};

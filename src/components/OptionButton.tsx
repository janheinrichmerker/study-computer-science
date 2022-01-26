import { FunctionComponent } from "react";
import ReactPlayer from "react-player/lazy";
import { Choice, ChoiceEvent, EventType, Side, StoryEvent } from "../model";

function optionClassName(side: Side): string {
  switch (side) {
    case Side.Top:
      return "player-option-top";
    case Side.Bottom:
      return "player-option-bottom";
  }
}
function optionChoice(side: Side, event: ChoiceEvent): Choice {
  switch (side) {
    case Side.Top:
      return event.top;
    case Side.Bottom:
      return event.bottom;
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

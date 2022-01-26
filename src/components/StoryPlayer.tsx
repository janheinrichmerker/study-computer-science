import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, FunctionComponent, useRef, useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import ReactPlayer from "react-player";
import { OptionButton, Timestamp } from ".";
import { EventType, Side, Story } from "../model";

export interface StoryPlayerProps {
  story: Story;
  url: string;
}

export const StoryPlayer: FunctionComponent<StoryPlayerProps> = ({
  story,
  url,
}) => {
  const tick = 0.1; // 100ms

  const [playing, setPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const playerRef = useRef<ReactPlayer>(null);
  const player = playerRef.current ? playerRef.current : undefined;

  const togglePlaying = () => setPlaying(!playing);

  const currentEvent = story.find(
    (event) => event.time - tick <= progress && progress < event.time
  );

  if (currentEvent && currentEvent.type === EventType.Jump) {
    player?.seekTo(currentEvent.destination);
  }

  return (
    <Fragment>
      <Container
        className="player-container"
        onKeyPress={(event) => {
          if (event.key === " ") {
            togglePlaying();
          }
        }}
      >
        <ReactPlayer
          className="player"
          ref={playerRef}
          url={url}
          playing={playing && !currentEvent}
          progressInterval={(tick * 1000) / 2}
          onDuration={setDuration}
          onProgress={(progress) => {
            setProgress(progress.played * duration);
          }}
        />
        <OptionButton
          side={Side.Top}
          currentEvent={currentEvent}
          player={player}
        />
        <OptionButton
          side={Side.Bottom}
          currentEvent={currentEvent}
          player={player}
        />
        <div className="player-controls">
          {/* <button onClick={() => player?.seekTo(0)}>Start</button> */}
          <button className="player-play-button" onClick={togglePlaying}>
            <FontAwesomeIcon icon={playing ? faPause : faPlay} />
          </button>
          <progress
            className="player-progress-bar"
            // animated={currentEvent !== undefined}
            value={progress}
            max={duration}
          />
          <span className="player-progress-time">
            <Timestamp time={progress} max={60} /> /{" "}
            <Timestamp time={duration} max={60} />
          </span>
        </div>
        <button className="player-big-play-button" onClick={togglePlaying}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} size="4x" />
        </button>
      </Container>
      {/* <div className="debug">
        {JSON.stringify(currentEvent)}
        <br />
        Duration: {duration}
        <br />
        Progress: {progress}
        <br />
      </div> */}
    </Fragment>
  );
};

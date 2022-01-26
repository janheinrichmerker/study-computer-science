import { FunctionComponent, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
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
  const [muted, setMuted] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);
  const player = playerRef.current ? playerRef.current : undefined;
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const currentEvent = story.find(
    (event) => event.time - tick <= progress && progress < event.time
  );
  if (currentEvent && currentEvent.type === EventType.Jump) {
    player?.seekTo(currentEvent.destination);
  }
  return (
    <Container>
      <Row
        className="player-container"
        onKeyPress={(event) => {
          if (event.key === " ") {
            setPlaying(!playing);
          }
        }}
      >
        <ReactPlayer
          className="player"
          ref={playerRef}
          url={url}
          loop={true}
          playing={playing && !currentEvent}
          muted={muted}
          progressInterval={(tick * 1000) / 2}
          onDuration={(duration) => setDuration(duration)}
          onProgress={(progress) => {
            setProgress(progress.played * duration);
          }}
        />
        <OptionButton
          side={Side.Left}
          currentEvent={currentEvent}
          player={player}
        />
        <OptionButton
          side={Side.Right}
          currentEvent={currentEvent}
          player={player}
        />
        {/* <progress className="player-progress" max={duration} value={progress}>
          <Timestamp time={progress} max={60} /> /{" "}
          <Timestamp time={duration} max={60} />
        </progress> */}
      </Row>
      <Row>{JSON.stringify(currentEvent)}</Row>
      <Row>
        {/* <Col>Duration: {duration}</Col>
        <Col>Progress: {progress}</Col> */}
        <Col md="auto">
          <button onClick={() => player?.seekTo(0)}>Start</button>
        </Col>
        <Col md="auto">
          {playing ? (
            <button onClick={() => setPlaying(false)}>Pause</button>
          ) : (
            <button onClick={() => setPlaying(true)}>Play</button>
          )}
        </Col>
        <Col md="auto">
          {muted ? (
            <button onClick={() => setMuted(false)}>Unmute</button>
          ) : (
            <button onClick={() => setMuted(true)}>Mute</button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

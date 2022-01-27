import {
  faBackward,
  faCompress,
  faExpand,
  faForward,
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, FunctionComponent, useRef, useState } from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactPlayer from "react-player";
import { OptionButton, Timestamp } from ".";
import { EventType, Side, Story } from "../model";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useIdleTimer } from "react-idle-timer";

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

  const seekStart = () => player?.seekTo(0);
  const seekForward = () => player?.seekTo(progress + 10);
  const seekBackward = () => player?.seekTo(progress - 10);
  const stepForward = () => player?.seekTo(progress + tick);
  const stepBackward = () => player?.seekTo(progress - tick);

  const currentEvent = story.find(
    (event) => event.time - tick <= progress && progress < event.time
  );

  if (currentEvent && currentEvent.type === EventType.Jump) {
    player?.seekTo(currentEvent.destination);
  }

  const fullScreenHandle = useFullScreenHandle();

  const [idle, setIdle] = useState<boolean>(false);
  useIdleTimer({
    timeout: 750,
    onIdle: () => setIdle(true),
    onActive: () => setIdle(false),
  });

  return (
    <Container
      className={
        "player-container" + (idle ? " idle" : "") + (playing ? " playing" : "")
      }
      onKeyPress={(event) => {
        if (event.key === " ") {
          togglePlaying();
          return false;
        }
      }}
    >
      <FullScreen handle={fullScreenHandle}>
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
          <button className="player-play-button" onClick={togglePlaying}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{playing ? "Pausieren" : "Abspielen"}</Tooltip>}
            >
              <span>
                <FontAwesomeIcon icon={playing ? faPause : faPlay} />
              </span>
            </OverlayTrigger>
          </button>
          <span className="player-progress-time">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{progress.toFixed(1)} Sekunden</Tooltip>}
            >
              <span>
                <Timestamp time={progress} max={60} />
              </span>
            </OverlayTrigger>
          </span>
          <progress
            className="player-progress-bar"
            // animated={currentEvent !== undefined}
            value={progress}
            max={duration}
          />
          <span className="player-progress-time">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>{(duration - progress).toFixed(1)} Sekunden</Tooltip>
              }
            >
              <span>
                <Timestamp time={duration - progress} max={60} />
              </span>
            </OverlayTrigger>
          </span>
          <button className="player-play-button" onClick={stepBackward}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Schritt zurück</Tooltip>}
            >
              <span>
                <FontAwesomeIcon icon={faStepBackward} />
              </span>
            </OverlayTrigger>
          </button>
          <button className="player-play-button" onClick={seekBackward}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>10s zurück</Tooltip>}
            >
              <span>
                <FontAwesomeIcon icon={faBackward} />
              </span>
            </OverlayTrigger>
          </button>
          <button className="player-play-button" onClick={seekForward}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>10s weiter</Tooltip>}
            >
              <span>
                <FontAwesomeIcon icon={faForward} />
              </span>
            </OverlayTrigger>
          </button>
          <button className="player-play-button" onClick={stepForward}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Schritt weiter</Tooltip>}
            >
              <span>
                <FontAwesomeIcon icon={faStepForward} />
              </span>
            </OverlayTrigger>
          </button>
          <button className="player-play-button" onClick={seekStart}>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Zurück zum Anfang</Tooltip>}
            >
              <span>
                <FontAwesomeIcon icon={faUndo} />
              </span>
            </OverlayTrigger>
          </button>
          <button
            className="player-play-button"
            onClick={
              fullScreenHandle.active
                ? fullScreenHandle.exit
                : fullScreenHandle.enter
            }
          >
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  {fullScreenHandle.active
                    ? "Vollbild verlassen"
                    : "Vollbild öffnen"}
                </Tooltip>
              }
            >
              <span>
                <FontAwesomeIcon
                  icon={fullScreenHandle.active ? faCompress : faExpand}
                />
              </span>
            </OverlayTrigger>
          </button>
        </div>
        <button
          className="player-big-play-button"
          onClick={togglePlaying}
          style={playing ? {} : { paddingLeft: "0.6rem" }}
        >
          <FontAwesomeIcon icon={playing ? faPause : faPlay} size="4x" />
        </button>
      </FullScreen>
    </Container>
  );
};

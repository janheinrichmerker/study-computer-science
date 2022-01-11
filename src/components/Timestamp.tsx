import { Fragment, FunctionComponent } from "react";

export const Timestamp: FunctionComponent<{
  time: number;
  max?: number;
}> = ({ time, max }) => {
  const hours: number = Math.floor(time / 60 / 60);
  const minutes: number = Math.floor((time - hours * 60 * 60) / 60);
  const seconds: number = Math.round(time - hours * 60 * 60 - minutes * 60);

  const maxHours: number = Math.floor((max ?? time) / 60 / 60);
  const maxMinutes: number = Math.floor(
    ((max ?? time) - maxHours * 60 * 60) / 60
  );

  const hoursText = maxHours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
  const minutesText =
    maxHours > 0 || maxMinutes > 0
      ? `${minutes.toString().padStart(2, "0")}:`
      : "";
  const text = `${hoursText}${minutesText}${seconds
    .toString()
    .padStart(2, "0")}`;
  return <Fragment>{text}</Fragment>;
};

export enum EventType {
  Jump,
  Choice,
}

export interface BaseEvent {
  readonly type: EventType;
  readonly time: number;
}

export interface JumpEvent extends BaseEvent {
  readonly type: EventType.Jump;
  readonly time: number;
  readonly destination: number;
}

export enum Side {
  Top,
  Bottom,
}

export interface Choice {
  readonly side: Side;
  readonly title: string;
  readonly destination: number;
}

export interface TopChoice extends Choice {
  readonly side: Side.Top;
}
export interface BottomChoice extends Choice {
  readonly side: Side.Bottom;
}

export interface ChoiceEvent {
  readonly type: EventType.Choice;
  readonly time: number;
  readonly top: TopChoice;
  readonly bottom: BottomChoice;
}

export type StoryEvent = JumpEvent | ChoiceEvent;

export type Story = Array<StoryEvent>;

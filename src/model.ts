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
  Left,
  Right,
}

export interface Choice {
  readonly side: Side;
  readonly title: string;
  readonly destination: number;
}

export interface LeftChoice extends Choice {
  readonly side: Side.Left;
}
export interface RightChoice extends Choice {
  readonly side: Side.Right;
}

export interface ChoiceEvent {
  readonly type: EventType.Choice;
  readonly time: number;
  readonly left: LeftChoice;
  readonly right: RightChoice;
}

export type StoryEvent = JumpEvent | ChoiceEvent;

export type Story = Array<StoryEvent>;

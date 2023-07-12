export enum Direction {
    UP = "up",
    RIGHT = "right",
    DOWN = "down",
    LEFT = "left"
};

export type Position = {
    row: number;
    column: number;
};

export type VisitedPosition = Set<Position>;

export type NodeElement = string;
export type MapGrid = NodeElement[];

export type Node = {
    position: Position;
    value: NodeElement;
};

export type MapResolution = {
    text: string;
    path: string;
};




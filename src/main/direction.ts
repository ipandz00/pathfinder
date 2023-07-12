import { Direction, MapGrid, Node, Position } from "../types";
import { isPositionValid } from "./grid";
import { isEnd, isNodeAllowed, isTurn } from "./node";

const directions = Object.values(Direction);

export const getPositionOffsetForDirection = (direction: Direction): Position => {
    switch (direction) {
      case Direction.UP:
        return { row: -1, column: 0 };
      case Direction.RIGHT:
        return { row: 0, column: 1 };
      case Direction.DOWN:
        return { row: 1, column: 0 };
      case Direction.LEFT:
        return { row: 0, column: -1 };
      default:
        throw new Error(`${direction} is not a valid direction.`);
    };
};

export const getPossibleDirections = (map: MapGrid, node: Node, currentDirection?: Direction): Direction[] => {
    const { column: nodeColumn, row: nodeRow } = node.position;
    let computedDirection: Direction[] = [];
    directions.forEach(direction => {
        const { column, row} = getPositionOffsetForDirection(direction);
        const nextPosition = {
            column: nodeColumn + column,
            row: nodeRow + row
        };

        if(isPositionValid(map ,nextPosition)) {
            const nextNode: Node = {
                position: nextPosition,
                value: map[nextPosition.row][nextPosition.column]
            };
            console.log({nextNode, direction, node})
            if(isTurn(nextNode.value) || isEnd(nextNode.value) || isNodeAllowed(nextNode.value, direction)) {
                const isOldDirection = currentDirection ? isOppositeDirection(currentDirection, direction) : false;
                if(!isOldDirection) computedDirection.push(direction);
            }
        }
    });

    return computedDirection;
};

const isOppositeDirection = (a: Direction, b: Direction): boolean => {
    switch (a) {
        case Direction.UP:
            return b === Direction.DOWN;
        case Direction.RIGHT:
            return b === Direction.LEFT;
        case Direction.DOWN:
            return b === Direction.UP;
        case Direction.LEFT:
            return b === Direction.RIGHT;
        default:
            throw new Error(`${a} is not a valid direction.`);
    }
}
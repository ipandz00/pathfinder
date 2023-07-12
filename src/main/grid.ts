import { MapGrid, NodeElement, Node, Position, VisitedPosition, Direction } from "../types";
import { getPositionOffsetForDirection } from "./direction";

export const findElement = (map: MapGrid, element: NodeElement): Node | undefined => {
    for(let i = 0; i < map.length; i++) {
        const pos = map[i].indexOf(element);
        if(pos !== -1) {
            return {
                position: {
                    row: i,
                    column: pos
                },
                value: map[i][pos]
            }
        }
    }
};

export const isPositionValid = (map: MapGrid, position: Position) => {
    const { row, column } = position;
    return !(row < 0 || column < 0 || row >= map.length || column >= map[row].length);
};

export const isVisited = (node: Node, visited: VisitedPosition) => visited.has(node.position);
export const addToVisited = (node: Node, visited: VisitedPosition) => visited.add(node.position);

export const getNextNodeInDirection = (map: MapGrid, node: Node, direction: Direction): Node | undefined => {
    const nextNode: Node = getNextNode(map, node, direction);
    if (isPositionValid(map, nextNode.position)) return nextNode;
};

export const getNextNode = (map: MapGrid, node: Node, direction: Direction): Node => {
    const { row, column } = getPositionOffsetForDirection(direction);
    const position = {
        row: node.position.row + row,
        column: node.position.column + column
    };

    return {
        position,
        value: map[position.row][position.column]
    };
};
import constants from "../constants";
import { Direction, MapGrid, MapResolution, Node, Position, VisitedPosition } from "../types";
import { getPossibleDirections } from "./direction";
import { addToVisited, findElement, getNextNode, getNextNodeInDirection, isVisited } from "./grid";
import { isAllowedLetter, isBasicPathNode, isEnd, isIntersection, isStart } from "./node";

export const resolveMap = (map: MapGrid): MapResolution => {
    const startNode = findElement(map, constants.START);
    if(startNode) {
        const possibleDirections = getPossibleDirections(map, startNode);

        const visitedGrid = new Set<Position>();
        return resolveNode(map, visitedGrid, startNode, possibleDirections[0], "", "");
    } else {
        throw new Error("Map has no start node!");
    }
};

const resolveNode = (map: MapGrid, visited: VisitedPosition, node: Node, direction: Direction, path: string, text: string): MapResolution => {
    const { value: nodeValue } = node;
    path += nodeValue;
    if(isEnd(nodeValue)) return { path, text };
    if(isAllowedLetter(nodeValue) && !isVisited(node, visited)) text += nodeValue;
    const nextDirection = getNextValidDirection(map, visited, node, direction);
    const nextNode = getNextNodeInDirection(map, node, nextDirection);
    if(nextNode) {
        addToVisited(node, visited);
        return resolveNode(map, visited, nextNode, nextDirection, path, text);
    }

    throw new Error("Fatal error")
};

const getNextValidDirection = (map: MapGrid, visited: VisitedPosition, node: Node, direction: Direction): Direction => {
    const possibleDirections = getPossibleDirections(map, node, direction);

    if(possibleDirections.length === 0) throw new Error("Cannot resolve map as no direction is available to take.")

    if(isIntersection(node.value)) {
        if(possibleDirections.length === 2) throw new Error("Map cannot contain forks.");
        if(possibleDirections.length === 3) return direction;
        if(possibleDirections.length === 1) {
            if(possibleDirections[0] === direction) throw new Error("Map cannot contain fake turns.");
            return possibleDirections[0];
        }
    }
    if(isBasicPathNode(node.value)) return direction;
    return possibleDirections[0];
}
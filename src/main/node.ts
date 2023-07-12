import constants from "../constants";
import { MapGrid, NodeElement, Node, Direction, Position } from "../types";
import { isASCII } from "../utils/stringUtils";

const { START, END, INTERSECTION, VERTICAL_PATH, HORIZONTAL_PATH } = constants;

export const isStart = (value: NodeElement): boolean => value === START;
export const isEnd = (value: NodeElement): boolean => value === END;
export const isAllowedLetter = (value: NodeElement): boolean => isASCII(value);
export const isVertical = (value: NodeElement): boolean => value === VERTICAL_PATH;
export const isHorizontal = (value: NodeElement): boolean => value === HORIZONTAL_PATH;
export const isIntersection = (value: NodeElement): boolean => value === INTERSECTION;
export const isBasicPathNode = (value: NodeElement): boolean => isVertical(value) || isHorizontal(value);
export const isTraversable = (value: NodeElement): boolean => isBasicPathNode(value) || isIntersection(value) || isAllowedLetter(value);

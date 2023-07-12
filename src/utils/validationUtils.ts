import constants from "../constants";
import { getCharFrequency } from "./stringUtils";

export const doesMapContainAllowedNumberOfStartsAndEnds = (map: string): boolean => {
    const { START, END, NUMBER_OF_START_CHAR, NUMBER_OF_END_CHAR } = constants;
    const numberOfStarts = getCharFrequency(map, START);
    const numberOfEnds = getCharFrequency(map, END);

    if(numberOfEnds === NUMBER_OF_END_CHAR && numberOfStarts === NUMBER_OF_START_CHAR) return true;
    
    throw new Error(`Map is not valid. Map contains: Starts: ${numberOfStarts}, Ends: ${numberOfEnds}`);
};
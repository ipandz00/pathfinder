import os from "os";
import { readFileFromMaps } from "./utils/fileUtils";
import { doesMapContainAllowedNumberOfStartsAndEnds } from "./utils/validationUtils";
import { resolveMap } from "./main/resolve";
import { MapGrid } from "./types";

export const solve = (fileName: string) => {
    const fileAsString = readFileFromMaps(fileName);
    doesMapContainAllowedNumberOfStartsAndEnds(fileAsString);
    const mapAsGrid: MapGrid = fileAsString.split(os.EOL);
    return resolveMap(mapAsGrid);
};
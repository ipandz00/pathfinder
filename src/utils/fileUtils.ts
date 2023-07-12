import fs from "fs";
import path from "path";

export const readFileFromMaps = (fileName: string): string => {
    const modifiedPath = path.join(__dirname, "..", "..", "maps", fileName);
    try {
        return fs.readFileSync(modifiedPath, "ascii");
    } catch(error) {
        throw new Error(`Failed to read file at: ${path}. Error: ${error}`);
    }
};
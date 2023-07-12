export const getCharFrequency = (text: string, char: string): number => {
    return text.split(char).length - 1;
};

export const isASCII = (char: string): boolean => {
    if(char.length !== 1) return false;
    const value = char.charCodeAt(0);

    return value >= 65 && value <= 90;
} 
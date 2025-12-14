const shigerianCharCodeTable = [
    "しげる",
    "シゲル",
    "茂",
    "いしば",
    "イシバ",
    "石破",
    "しげ",
    "シゲ",
    "しげしげ",
    "シゲシゲ",
];
const shigerianCharSeparater = "。";
const shigerianCharCodeSeparater = " ";

function charCode2Shigerian(char: number) {
    const charCodeString = char.toString();
    const result = [];

    for (let i = 0; i < charCodeString.length; i++) {
        const charCodeStringChar = charCodeString[i];
        if (typeof charCodeStringChar === "undefined") throw new Error("Unknown error.")
        const charCode = parseInt(charCodeStringChar);
        result.push(shigerianCharCodeTable[charCode]);
    }

    return result.join(shigerianCharCodeSeparater);
}

function shigerianChar2Char(shigerianChar: string) {
    const shigerianCharCodeStrings = shigerianChar.split(shigerianCharCodeSeparater);
    let shigerianCharCodeString = "";
    
    for (let i = 0; i < shigerianCharCodeStrings.length; i++){
        const shigerianChar = shigerianCharCodeStrings[i];
        if (typeof shigerianChar === "undefined") throw new Error("Unknown error.");

        const shigerianCharIndex = shigerianCharCodeTable.indexOf(shigerianChar);
        if (shigerianCharIndex === -1) throw new Error("Invalid shigerian text.");
        shigerianCharCodeString += shigerianCharIndex.toString();
    }

    return String.fromCharCode(parseInt(shigerianCharCodeString));
}

export function translateAny2Shigerian(anyText: string) {
    if (!anyText) return "";

    const result = [];

    for (let i = 0; i < anyText.length; i++) {
        result.push(charCode2Shigerian(anyText.charCodeAt(i)));
    }

    return result.join(shigerianCharSeparater);
}

export function translateShigerian2Any(shigerianText: string) {
    if (!shigerianText) return "";

    const shigerianChars = shigerianText.split(shigerianCharSeparater);
    const result = [];

    for (let i = 0; i < shigerianChars.length; i++) {
        const shigerianChar = shigerianChars[i];
        if (typeof shigerianChar === "undefined") throw new Error("Unknown error.");
        result.push(shigerianChar2Char(shigerianChar));
    }

    return result.join("");
}
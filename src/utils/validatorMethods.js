export const validateCgpa = (cgpa) => {
    // Convert the cgpa to a floating-point number
    let floatValue = parseFloat(cgpa);

    // Check if the value is a number and within the specified range
    if (!isNaN(floatValue) && floatValue >= 2.00 && floatValue <= 4.00) {
        return true;
    } else {
        return false;
    }

}


export const validateSemester = (text) => {
    // Regular expressions to match ordinals and similar words
    const ordinalPatterns = [
        /\b(1st|one|first|1)\b/gi,
        /\b(2nd|two|second|2)\b/gi,
        /\b(3rd|three|third|3)\b/gi,
        /\b(4th|four|fourth|4)\b/gi,
        /\b(5th|five|fifth|5)\b/gi,
        /\b(6th|six|sixth|6)\b/gi,
        /\b(7th|seven|seventh|7)\b/gi,
        /\b(8th|eight|eighth|8)\b/gi
    ];

    // Iterate over patterns and match against the text
    for (let i = 0; i < ordinalPatterns.length; i++) {
        if (ordinalPatterns[i].test(text)) {
            return i + 1;
        }
    }

    // If no match is found, return null
    return null;
}

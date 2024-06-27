export const validateCgpa = (text, quantity = "single") => {
    // Regular expression to match CGPA values in the range 2.00 - 4.00
    const cgpaPattern = /\b(2\.\d{2}|3\.\d{2}|4\.00)\b/g;

    // Use the pattern to search the text
    let match = cgpaPattern.exec(text);

    // If a match is found, return it as a string
    if (match) {
        if(quantity === "all"){
            return match;
        } else{
            return match[0];
        }
    }

    // If no match is found, return null
    return null;

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

export const validatePrevResults = (text) =>{
    // Split the text into an array of strings
    const parts = text.split(/,\s*/); // Assuming CGPAs are separated by commas followed by optional whitespace

    // Filter the array to keep only valid CGPAs
    const validCgpas = parts.filter(part => {
        // Remove leading/trailing whitespace and check if the part is a number
        const trimmedPart = part.trim();
        if (!isNaN(trimmedPart)) {
            // Convert the part to a float and check if it has exactly two decimal places
            const cgpa = parseFloat(trimmedPart);
            if (cgpa >= 2.00 && cgpa <= 4.00) {
                return true; // Valid CGPA
            }
        }
        return false; // Not a valid CGPA
    });

    // Join the valid CGPAs into a single string separated by commas
    return {
        cgpas: validCgpas.join(', '),
        len: validCgpas.length
    };
}
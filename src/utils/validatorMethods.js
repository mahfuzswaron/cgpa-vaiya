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
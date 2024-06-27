export const getPredictedResult = async (x) => {
    const { regulation, targetedCgpa, previousResults } = x;
    let query = `predict?target=${targetedCgpa}&scale=${regulation}`;
    if (previousResults) query += `&previous_result=${previousResults}`;
    const url = `https://cgpa-vaiya-server.onrender.com/${query}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
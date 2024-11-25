export const getPredictedResult = async (x) => {
  const { regulation, targetedCgpa, previousResults } = x;

  let query = `predict?target=${targetedCgpa}&scale=${regulation}`;
  if (previousResults) query += `&previous_result=${previousResults}`;

  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const requestUrl = `${serverUrl}/${query}`;

  const response = await fetch(requestUrl);
  const data = await response.json();

  return data;
};

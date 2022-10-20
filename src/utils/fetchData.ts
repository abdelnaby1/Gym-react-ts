// const configValue: string = process.env.REACT_RAPID_API_EXERCISES;
export const url: string = "https://exercisedb.p.rapidapi.com/exercises";

export const exerciseOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_RAPID_API_EXERCISES,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url: string, options: {}) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

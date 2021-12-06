import { getData } from "./getData";

export const getGenres = async () => {
    const data = await getData('https://api.themoviedb.org/3/genre/movie/list?api_key=8e526a58ae4ed5fe38e95586eb468e63&language=en-US');
    return data
};
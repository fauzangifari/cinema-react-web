import axios from "axios";

export const getMovieList = async () => {
    const movie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`)
    return movie.data.results;
};

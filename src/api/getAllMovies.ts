import axios from "axios";

const topMoviesId = [
  "tt0111161",
  "tt0068646",
  "tt0468569",
  "tt0071562",
  "tt0050083",
  "tt0108052",
  "tt0167260",
  "tt0110912",
  "tt0120737",
  "tt0060196",
];

const topMoviesPromises = topMoviesId.map((id) =>
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fe5a9562`)
);

export default topMoviesPromises;

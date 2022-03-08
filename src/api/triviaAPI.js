import axios from "axios";

export const fetchTrivia = (level) => {
  return axios.get("http://localhost:4000/levels/" + level);
};

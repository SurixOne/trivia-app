import axios from "axios";

export const fetchTrivia = () => {
  return axios.get("http://localhost:4000/levels");
};

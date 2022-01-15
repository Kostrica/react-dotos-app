import axios from "axios";
import { BASE_URL } from "./BaseURL";


export const getTodos = () => {
  return axios.get(`${BASE_URL}/todos`, {params: {_limit: 10}});
}

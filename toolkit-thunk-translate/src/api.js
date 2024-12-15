import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "39c514b1a8msh3d2b84b1911b49fp1fd4c7jsn0382d6d882c4",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});

export default api;

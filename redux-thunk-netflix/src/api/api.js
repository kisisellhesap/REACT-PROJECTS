import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjExODE2ODE1YmQ0MWY0YzI5NTNjY2FkZjk1YjRlYyIsIm5iZiI6MTY4NjkyMzMyNi42NTYsInN1YiI6IjY0OGM2ODNlYzJmZjNkMDBlMmRmNGUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BH0V_b0fJ6kNPxE6OOfIOgxunkG5FMV_-8eCZZaly4",
  },
});

export default api;

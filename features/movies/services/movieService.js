import { api } from "../../../services/api";

export const getMovies = async () => {
  const response = await api.get("/movie/popular",{
      params: {
        language: "pt-BR",
        page: 1,
      },
  });
  return response.data.results;
};
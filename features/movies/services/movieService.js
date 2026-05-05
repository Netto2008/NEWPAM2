import { api } from "../../../services/api";

export async function getPopularMovies() {}
  
export const getElencoMovie = async (movieId) => {
  const response = await api.get(`/movies/${movieId}/credit`,{
    params: {
      language: "pt-BR"
    },
  });
  return response.data.cast.map((actor) => ({
    id: actor.id,
    name: actor.name,
    personagem: actor.character,
    profileUrl: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
  }));
};

import React from "react";
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import { ROUTES } from "../../../../constants/routes";
import { styles } from "./styles";

export default function MovieList() {
  const { movies, loading, error } = useMovies();
  const navigation = useNavigation();

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={styles.loader.color} />
        <Text style={[styles.stateText, { marginTop: 16 }]}>Carregando...</Text>
      </View>
    );
  }

  // ── Erro ───────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.stateText}>Erro ao carregar filmes</Text>
        <Text style={styles.stateSubText}>Verifique o backend e a API_URL</Text>
      </View>
    );
  }

  // ── Lista vazia ────────────────────────────────────────────────────────────
  if (!movies?.length) {
    return (
      <View style={styles.centered}>
        <Text style={styles.stateText}>Nenhum filme encontrado</Text>
        <Text style={styles.stateSubText}>Tente novamente mais tarde</Text>
      </View>
    );
  }

  // ── Lista de filmes ────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(ROUTES.MOVIE_DETAILS, {
                movie: item,
              })
            }
            width={"45%"}
          />
        )}
      />
    </View>
  );
}

/*
A tela MovieList exibe a lista de filmes com tema visual Netflix (fundo preto + neon vermelho).
Os estilos inline foram substituídos pelos tokens centralizados em styles.js:
  - styles.centered    → estados de loading, erro e lista vazia
  - styles.stateText   → texto principal neon vermelho com glow
  - styles.stateSubText→ texto secundário apagado
  - styles.container   → wrapper principal da lista
  - styles.list        → FlatList
  - styles.columnWrapper → espaçamento entre colunas
*/

import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";
import styles from "./styles";

export default function MovieDetails({ route }) {
  const movie = route?.params?.movie;
  const navigation = useNavigation();

  if (!movie) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Nenhum filme selecionado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Image
        source={{ uri: movie.img_capa }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>{movie.nome}</Text>
      <Text style={styles.year}>Ano: {movie.ano}</Text>

      <Text style={styles.sectionTitle}>Sinopse</Text>
      <Text style={styles.synopsis}>{movie.sinopse || "Sem sinopse disponível."}</Text>

      <Text style={styles.sectionTitle}>Elenco</Text>
      {movie.elenco?.length ? (
        movie.elenco.map((actor) => (
          <TouchableOpacity
            key={actor.id}
            onPress={() =>
              navigation.navigate(ROUTES.ACTOR_DETAILS, {
                actor,
              })
            }
            style={styles.actorContainer}
          >
            <Image
              source={{ uri: actor.imagem }}
              style={styles.actorImage}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.actorName}>{actor.nome}</Text>
              <Text style={styles.actorCharacter}>{actor.personagem}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noCastText}>Informações de elenco não disponíveis.</Text>
      )}
    </ScrollView>
  );
}

import React, { use } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";
import styles from "./styles";
import { FlatList } from "react-native-web";

export default function MovieDetails() {
  const route = useRoute();
  const { movie } = route.params;
 
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.posterUrl }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>{movie.ano}</Text>
      <Text style={styles.description}>{movie.sinopse}</Text>
      <Text style={styles.titleElenco}>Elenco</Text>

      <FlatList
        data={elenco}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Assistir Trailer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
  
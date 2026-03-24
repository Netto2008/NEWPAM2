import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";

export default function MovieDetails({ route }) {
  const movie = route?.params?.movie;
  const navigation = useNavigation();

  if (!movie) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
        <Text>Nenhum filme selecionado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Image
        source={{ uri: movie.img_capa }}
        style={{ width: "100%", height: 240, borderRadius: 8, marginBottom: 16 }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>{movie.nome}</Text>
      <Text style={{ color: "#666", marginBottom: 10 }}>Ano: {movie.ano}</Text>

      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 6 }}>Sinopse</Text>
      <Text style={{ marginBottom: 14 }}>{movie.sinopse || "Sem sinopse disponível."}</Text>

      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Elenco</Text>
      {movie.elenco?.length ? (
        movie.elenco.map((actor) => (
          <TouchableOpacity
            key={actor.id}
            onPress={() =>
              navigation.navigate(ROUTES.ACTOR_DETAILS, {
                actor,
              })
            }
            style={{ marginBottom: 16, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={{ uri: actor.imagem }}
              style={{ width: 64, height: 64, borderRadius: 32, marginRight: 12 }}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>{actor.nome}</Text>
              <Text style={{ color: "#666" }}>{actor.personagem}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Informações de elenco não disponíveis.</Text>
      )}
    </ScrollView>
  );
}

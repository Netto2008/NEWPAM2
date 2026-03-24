import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function ActorDetails({ route }) {
  const actor = route?.params?.actor;

  if (!actor) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
        <Text>Ator não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {actor.imagem ? (
        <Image
          source={{ uri: actor.imagem }}
          style={{ width: "100%", height: 280, borderRadius: 10, marginBottom: 18 }}
          resizeMode="cover"
        />
      ) : null}

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>{actor.nome}</Text>
      <Text style={{ fontSize: 18, color: "#666", marginBottom: 16 }}>Personagem: {actor.personagem}</Text>

      <Text style={{ fontSize: 16, lineHeight: 22 }}>
        
      </Text>
    </ScrollView>
  );
}

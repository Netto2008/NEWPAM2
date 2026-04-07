import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./style";

export default function ActorDetails({ route }) {
  const actor = route?.params?.actor;

  if (!actor) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Ator não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>

      {/* Imagem principal */}
      {actor.imagem ? (
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: actor.imagem }}
            style={styles.image}
          />
          <View style={styles.imageOverlay} />
          <View style={styles.imageAccentBar} />
        </View>
      ) : null}

      {/* Conteúdo textual */}
      <View style={styles.content}>

        {/* Nome */}
        <Text style={styles.name}>{actor.nome}</Text>
        <View style={styles.nameDivider} />

        {/* Personagem */}
        <Text style={styles.characterLabel}>Personagem</Text>
        <Text style={styles.character}>{actor.personagem}</Text>

        {/* Biografia (campo vazio por enquanto) */}
        <Text style={styles.sectionTitle}>Biografia</Text>
        <Text style={styles.bioText}>
          {actor.biografia ?? ""}
        </Text>

      </View>

    </ScrollView>
  );
}
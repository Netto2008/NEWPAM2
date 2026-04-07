import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles.js";

export default function ActorCard({ actor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>

        {/* Barra neon no topo */}
        <View style={styles.accentBar} />

        <Image
          source={{ uri: actor.imagem }}
          style={styles.image}
        />

        <Text style={styles.name} numberOfLines={2}>
          {actor.nome}
        </Text>

        <Text style={styles.character} numberOfLines={2}>
          {actor.personagem}
        </Text>

      </View>
    </TouchableOpacity>
  );
}
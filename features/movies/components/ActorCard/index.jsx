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
          source={{ uri: actor.profileUrl }}
          style={styles.image}
        />

        <Text numberOfLines={1} style={styles.nome}>
          {actor.name}
        </Text>

        <Text numberOfLines={1} style={styles.personagem}>
          {actor.personagem}
        </Text>

      </View>
    </TouchableOpacity>
  );
}
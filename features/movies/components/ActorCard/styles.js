import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const COLORS = {
  background:   "#000000",
  cardBg:       "#111111",
  cardBorder:   "#1a1a1a",
  neonRed:      "#e50914",
  neonRedGlow:  "#ff1a24",
  neonRedDark:  "#8b0000",
  textPrimary:  "#e50914",
  textSecondary:"#ff4d55",
  textMuted:    "#660000",
  white:        "#fffcfc",
};

const neonShadow = {
  shadowColor:   COLORS.neonRed,
  shadowOffset:  { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius:  10,
  elevation:     8,
};

const styles = StyleSheet.create({

  container: {
    width:           width * 0.28,
    backgroundColor: COLORS.cardBg,
    borderRadius:    8,
    borderWidth:     1,
    borderColor:     COLORS.cardBorder,
    alignItems:      "center",
    paddingBottom:   10,
    overflow:        "hidden",
    ...neonShadow,
  },

  // Barra neon no topo do card
  accentBar: {
    width:           "100%",
    height:          3,
    backgroundColor: COLORS.neonRed,
    marginBottom:    8,
    ...neonShadow,
  },

  image: {
    width:        width * 0.22,
    height:       width * 0.22,
    borderRadius: (width * 0.22) / 2,   // círculo perfeito
    borderWidth:  2,
    borderColor:  COLORS.neonRed,
    ...neonShadow,
  },

  name: {
    marginTop:    8,
    fontSize:     11,
    fontWeight:   "800",
    letterSpacing: 1.2,
    color:        COLORS.textPrimary,
    textAlign:    "center",
    textTransform: "uppercase",
    paddingHorizontal: 6,
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  character: {
    marginTop:    4,
    fontSize:     10,
    fontWeight:   "500",
    letterSpacing: 0.8,
    color:        COLORS.textSecondary,
    textAlign:    "center",
    paddingHorizontal: 6,
    fontStyle:    "italic",
    textShadowColor:  COLORS.neonRed,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },

});

export { COLORS };
export default styles;
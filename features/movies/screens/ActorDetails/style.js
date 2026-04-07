import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const COLORS = {
  background:    "#000000",
  surface:       "#0d0d0d",
  cardBg:        "#111111",
  neonRed:       "#e50914",
  neonRedGlow:   "#ff1a24",
  neonRedDark:   "#8b0000",
  textPrimary:   "#e50914",
  textSecondary: "#ff4d55",
  textMuted:     "#660000",
  textBody:      "#cccccc",
  white:         "#ffffff",
  overlayDark:   "rgba(0,0,0,0.75)",
};

const neonShadow = {
  shadowColor:   COLORS.neonRed,
  shadowOffset:  { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius:  10,
  elevation:     8,
};

const styles = StyleSheet.create({

  // ── Scroll / container raiz ────────────────────────────────────────────────
  scrollView: {
    flex:            1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex:            1,
    backgroundColor: COLORS.background,
    paddingBottom:   40,
  },

  // ── Estado de erro (ator não encontrado) ───────────────────────────────────
  centered: {
    flex:            1,
    justifyContent:  "center",
    alignItems:      "center",
    backgroundColor: COLORS.background,
    padding:         16,
  },

  errorText: {
    fontSize:      16,
    fontWeight:    "700",
    letterSpacing: 2,
    color:         COLORS.textPrimary,
    textTransform: "uppercase",
    textAlign:     "center",
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  // ── Imagem principal ───────────────────────────────────────────────────────
  imageWrapper: {
    width:    "100%",
    height:   320,
    position: "relative",
  },

  image: {
    width:      "100%",
    height:     "100%",
    resizeMode: "cover",
  },

  // Gradiente escuro sobre a imagem (View sobreposta)


  // Barra neon na base da imagem
  imageAccentBar: {
    position:        "absolute",
    bottom:          0,
    left:            0,
    right:           0,
    height:          3,
    backgroundColor: COLORS.neonRed,
    ...neonShadow,
  },

  // ── Conteúdo textual ───────────────────────────────────────────────────────
  content: {
    paddingHorizontal: 20,
    paddingTop:        20,
  },

  name: {
    fontSize:      26,
    fontWeight:    "900",
    letterSpacing: 3,
    color:         COLORS.textPrimary,
    textTransform: "uppercase",
    marginBottom:  6,
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },

  // Linha divisória neon abaixo do nome
  nameDivider: {
    height:          2,
    width:           10,
    backgroundColor: COLORS.neonRed,
    marginBottom:    14,
    ...neonShadow,
  },

  characterLabel: {
    fontSize:      10,
    fontWeight:    "700",
    letterSpacing: 3,
    color:         COLORS.textMuted,
    textTransform: "uppercase",
    marginBottom:  4,
  },

  character: {
    fontSize:      18,
    fontWeight:    "700",
    letterSpacing: 1,
    color:         COLORS.textSecondary,
    marginBottom:  24,
    textShadowColor:  COLORS.neonRed,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

  // Seção de biografia / descrição
  sectionTitle: {
    fontSize:      11,
    fontWeight:    "800",
    letterSpacing: 4,
    color:         COLORS.textPrimary,
    textTransform: "uppercase",
    marginBottom:  10,
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

  bioText: {
    fontSize:    15,
    fontWeight:  "400",
    lineHeight:  24,
    color:       COLORS.textBody,
    letterSpacing: 0.3,
  },

  // ── Card de informações extras (ex.: filmes do ator) ──────────────────────
  infoCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius:    8,
    borderWidth:     1,
    borderColor:     "#1a1a1a",
    padding:         16,
    marginTop:       24,
    ...neonShadow,
  },

  infoCardAccentBar: {
    height:          3,
    backgroundColor: COLORS.neonRed,
    borderRadius:    2,
    marginBottom:    12,
    ...neonShadow,
  },

  infoRow: {
    flexDirection:  "row",
    justifyContent: "space-between",
    alignItems:     "center",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },

  infoKey: {
    fontSize:      11,
    fontWeight:    "700",
    letterSpacing: 2,
    color:         COLORS.textMuted,
    textTransform: "uppercase",
  },

  infoValue: {
    fontSize:      13,
    fontWeight:    "600",
    color:         COLORS.textSecondary,
    letterSpacing: 0.5,
  },

});

export { COLORS };
export default styles;
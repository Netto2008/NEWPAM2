import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// ─── Paleta Netflix Neon ─────────────────────────────────────────────────────
const COLORS = {
  background:    "#000000",
  surface:       "#0d0d0d",
  cardBg:        "#111111",
  cardBorder:    "#1a1a1a",
  neonRed:       "#e50914",       // vermelho Netflix puro
  neonRedGlow:   "#ff1a24",       // vermelho mais brilhante para "glow"
  neonRedDark:   "#8b0000",       // vermelho escuro para sombra
  textPrimary:   "#e50914",       // títulos em neon vermelho
  textSecondary: "#ff4d55",       // texto secundário vermelho claro
  textMuted:     "#660000",       // texto apagado
  white:         "#ffffff",
  overlayDark:   "rgba(0,0,0,0.85)",
};

// ─── Sombra neon vermelha reutilizável ───────────────────────────────────────
const neonShadow = {
  shadowColor:   COLORS.neonRed,
  shadowOffset:  { width: 0, height: 0 },
  shadowOpacity: 0.9,
  shadowRadius:  12,
  elevation:     10,
};

// ─── Estilos ─────────────────────────────────────────────────────────────────
export const styles = StyleSheet.create({

  // Contêiner raiz da tela
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 12,
    paddingTop: 16,
  },

  // ── Cabeçalho opcional ──────────────────────────────────────────────────────
  header: {
    flexDirection:  "row",
    alignItems:     "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neonRedDark,
  },

  headerTitle: {
    fontSize:    28,
    fontWeight:  "900",
    letterSpacing: 4,
    color:       COLORS.neonRed,
    textTransform: "uppercase",
    // glow simulado com textShadowColor (React Native suporta)
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  headerSubtitle: {
    fontSize:    11,
    fontWeight:  "600",
    letterSpacing: 3,
    color:       COLORS.textSecondary,
    textTransform: "uppercase",
    textShadowColor:  COLORS.neonRed,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

  // ── Linha separadora neon ────────────────────────────────────────────────────
  divider: {
    height:          1,
    backgroundColor: COLORS.neonRedDark,
    marginVertical:  12,
    ...neonShadow,
  },

  // ── FlatList ─────────────────────────────────────────────────────────────────
  list: {
    flex: 1,
  },

  columnWrapper: {
    justifyContent: "space-around",
    marginBottom:   16,
  },

  // ── Card de filme ─────────────────────────────────────────────────────────────
  card: {
    width:           width * 0.44,
    backgroundColor: COLORS.cardBg,
    borderRadius:    6,
    borderWidth:     1,
    borderColor:     COLORS.cardBorder,
    overflow:        "hidden",
    ...neonShadow,
  },

  // Barra de destaque neon no topo do card
  cardAccentBar: {
    height:          3,
    backgroundColor: COLORS.neonRed,
    ...neonShadow,
  },

  cardImage: {
    width:  "100%",
    height: 200,
    resizeMode: "cover",
  },

  cardImageOverlay: {
    position:        "absolute",
    bottom:          0,
    left:            0,
    right:           0,
    height:          80,
    backgroundColor: COLORS.overlayDark,
  },

  cardContent: {
    padding: 10,
  },

  cardTitle: {
    fontSize:    13,
    fontWeight:  "800",
    letterSpacing: 1,
    color:       COLORS.textPrimary,
    textTransform: "uppercase",
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    marginBottom: 4,
  },

  cardYear: {
    fontSize:   11,
    fontWeight: "500",
    color:      COLORS.textSecondary,
    letterSpacing: 1,
  },

  cardGenre: {
    fontSize:    10,
    fontWeight:  "600",
    color:       COLORS.textMuted,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginTop:   2,
  },

  // Badge de avaliação no canto do card
  ratingBadge: {
    position:        "absolute",
    top:             8,
    right:           8,
    backgroundColor: COLORS.neonRed,
    borderRadius:    4,
    paddingHorizontal: 6,
    paddingVertical:   3,
    ...neonShadow,
  },

  ratingText: {
    fontSize:   10,
    fontWeight: "900",
    color:      COLORS.white,
    letterSpacing: 0.5,
  },

  // ── Estados de loading / erro / vazio ─────────────────────────────────────────
  centered: {
    flex:           1,
    justifyContent: "center",
    alignItems:     "center",
    backgroundColor: COLORS.background,
  },

  stateText: {
    fontSize:    16,
    fontWeight:  "700",
    letterSpacing: 2,
    color:       COLORS.neonRed,
    textTransform: "uppercase",
    textAlign:   "center",
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },

  stateSubText: {
    fontSize:    12,
    fontWeight:  "400",
    letterSpacing: 1,
    color:       COLORS.textMuted,
    textAlign:   "center",
    marginTop:   8,
  },

  // Spinner / indicador de atividade
  loader: {
    color: COLORS.neonRed,
  },

  // ── Botão de ação (ex.: "Tentar novamente") ───────────────────────────────────
  retryButton: {
    marginTop:       20,
    paddingHorizontal: 24,
    paddingVertical:   10,
    borderWidth:     2,
    borderColor:     COLORS.neonRed,
    borderRadius:    4,
    ...neonShadow,
  },

  retryButtonText: {
    fontSize:    12,
    fontWeight:  "800",
    letterSpacing: 3,
    color:       COLORS.neonRed,
    textTransform: "uppercase",
    textShadowColor:  COLORS.neonRedGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});

// Exporta as cores também para reutilização em outros componentes
export { COLORS };
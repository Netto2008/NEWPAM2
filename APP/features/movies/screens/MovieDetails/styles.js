import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    width: width - 32,
    height: (width - 32) * 0.56,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#e0e0e0",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffefef",
    marginBottom: 8,
  },
  year: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginTop: 12,
    marginBottom: 8,
  },
  synopsis: {
    fontSize: 15,
    lineHeight: 22,
    color: "#ffffff",
    marginBottom: 12,
  },
  actorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#b40000",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  actorImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12,
    backgroundColor: "#111010",
  },
  actorName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
  },
  actorCharacter: {
    fontSize: 13,
    color: "#050404",
  },
  noCastText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  notFoundText: {
    fontSize: 16,
    color: "#000000",
  },
});
import { Text, View, StyleSheet } from "react-native";

function Subtitle({ subtitle }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});

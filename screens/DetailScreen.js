import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtile";
import List from "../components/MealDetail/List";

export default function DetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootConmtainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOutterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subtitle={"Ingredients"} />
          <List data={selectedMeal.ingredients} />
          <Subtitle subtitle={"Steps"} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootConmtainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOutterContainer: {
    alignItems: "center",
  },
});
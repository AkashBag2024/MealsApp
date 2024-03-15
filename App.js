// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Button } from "react-native";
import CatagoriesScreen from "./screens/CategoriesScreen";
// import AndroidSafeArea from './components/AndroidSafeArea';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <AndroidSafeArea style={AndroidSafeArea.AndroidSafeArea}>
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#561C24" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#C68484" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CatagoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap me!" onPress={onPressHandler} />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </AndroidSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {},
});

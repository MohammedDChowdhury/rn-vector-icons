import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <Feather name="home" size={24} color="black" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

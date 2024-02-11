import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";


export function Home() {
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 4 de Novembro de 2022</Text>
    </View>
  )
}
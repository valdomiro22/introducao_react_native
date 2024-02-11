import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";


export function Home() {

  function handleParticipantAdd() {
    console.log("Botão clicado")
  }
  
  function handleParticipantRemove(name: String) {
    console.log(`Remover participante: ${name}`)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        />  

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Rodrico" onRemove={ () => handleParticipantRemove("Valdomiro") }/>
    </View>
  )
}
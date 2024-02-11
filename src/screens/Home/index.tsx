import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";


export function Home() {
  const participants = ['Rodrico', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Maik', 'João']

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

      <FlatList 
        data={participants}
        // data={[]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
          key={item}
          name={item} 
          onRemove={ () => handleParticipantRemove("Valdomiro") }/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
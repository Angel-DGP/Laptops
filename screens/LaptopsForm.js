import { Button, Input } from "@rneui/base";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { saveLaptopRest } from "../rest_client/laptop";
export const LaptopsForm = ({ navigation }) => {
  const [id, setId] = useState();
  const [marca, setMarca] = useState();
  const [procesador, setProcesador] = useState();
  const [memoria, setMemoria] = useState();
  const [disco, setDisco] = useState();

  const showMessage = () => {
    Alert.alert("CONFIRMACIÓN", "Se creo la laptop");
  };
  const saveLaptop = () => {
    console.log("saveLaptop");
    saveLaptopRest(
      {
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage()
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>FORMULARIO CONTACTOS</Text>
      <Input
        value={marca}
        placeholder="Marca"
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        value={procesador}
        placeholder="Procesador"
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        value={memoria}
        placeholder="Memoria"
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        value={disco}
        placeholder="Disco"
        onChangeText={(value) => {
          setDisco(value);
        }}
      />
      <Button title="Save" onPress={saveLaptop} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

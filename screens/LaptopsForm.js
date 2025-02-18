import { Button, Input } from "@rneui/base";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import {
  deleteLaptopRest,
  saveLaptopRest,
  updatelaptopRest,
} from "../rest_client/laptop";
export const LaptopsForm = ({ navigation, route }) => {
  let laptopRecived = route.params.laptopParam;
  let isNew = true;
  if (laptopRecived != null) {
    isNew = false;
    console.log(laptopRecived);
  }
  const [marca, setMarca] = useState(isNew ? null : laptopRecived.marca);
  const [procesador, setProcesador] = useState(
    isNew ? null : laptopRecived.procesador
  );
  const [memoria, setMemoria] = useState(isNew ? null : laptopRecived.memoria);
  const [disco, setDisco] = useState(isNew ? null : laptopRecived.disco);

  const showMessage = (message) => {
    Alert.alert("CONFIRMACIÓN", message);
    navigation.goBack();
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
      showMessage("Se ha creado una laptop")
    );
  };
  const updateLaptop = () => {
    console.log("updateLaptop");
    updatelaptopRest(
      {
        id: laptopRecived.id,
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage("Se ha actualizado una laptop")
    );
  };
  const confirmDelete = () => {
    Alert.alert("ATENCIÓN", "¿Deseas eliminar este contacto?", [
      {
        text: "Si",
        onPress: deleteLaptop,
      },
      {
        text: "Cancelar",
      },
    ]);
  };
  const deleteLaptop = () => {
    console.log("laptop elimnado");
    deleteLaptopRest(
      { id: laptopRecived.id },
      showMessage("Se ha eliminado la laptop")
    );
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
      <Button title="Save" onPress={isNew ? saveLaptop : updateLaptop} />
      {isNew ? (
        <View></View>
      ) : (
        <Button
          title="Eliminar"
          onPress={() => {
            confirmDelete();
          }}
        ></Button>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

import { Button, ListItem } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllLaptops } from "../rest_client/laptop";
import { useState } from "react";

export const LaptopsList = () => {
  const [laptopsList, setLaptopsList] = useState();
  fnRefreshList = (list) => {
    setLaptopsList(list);
  };
  const LaptopItem = ({ Laptop }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>
            {Laptop.marca} {Laptop.procesador}
          </ListItem.Title>
          <ListItem.Subtitle>{Laptop.id}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <View style={styles.container}>
      <Text>LISTA DE LAPTOPS</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllLaptops(fnRefreshList);
        }}
      />
      <FlatList
        data={laptopsList}
        renderItem={({ item }) => {
          return <LaptopItem Laptop={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

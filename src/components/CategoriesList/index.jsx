import React from "react";
import { FlatList, View, Text } from "react-native";
import Category from "../Category";

const CategoriesList = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Lançamentos",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Continuar assistindo como Eduardo",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Em alta",
    },
  ];

  const renderItem = ({ item }) => <Category title={item.title} />;
  return (
    <>
      {DATA.map((category) => (
        <Category title={category.title} key={category.id} />
      ))}
    </>
  );
};

export default CategoriesList;

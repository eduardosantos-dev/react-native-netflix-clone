import React from "react";
import { FlatList } from "react-native";
import MediaCard from "../MediaCard";
import { CategoryContainer, CategoryTitle } from "./styles";

const Category = ({ title }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      img:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg",
      isOriginalNetflix: true,
      isTop10: true,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      img:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg",
      isOriginalNetflix: false,
      isTop10: true,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      img:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hnz5wRqeYKlugGbC7RZxC7DAiED.jpg",
      isOriginalNetflix: true,
      isTop10: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      img:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ydMTW0cK6enMEVX7fJGWjFzfscm.jpg",
      isOriginalNetflix: false,
      isTop10: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      img:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/woPYFGKwVULILbO7q44HmsNY0kO.jpg",
      isOriginalNetflix: true,
      isTop10: false,
    },
  ];

  const renderItem = ({ item }) => <MediaCard mediaItem={item} />;
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </CategoryContainer>
  );
};

export default Category;

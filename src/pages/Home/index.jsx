import React from "react";
import { Content, Wrapper } from "./styles";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import Cover from "../../components/Cover";
import CategoriesList from "../../components/CategoriesList";

const Home = () => {
  return (
    <ScrollView>
      <Wrapper>
        <Header />
        <Content>
          <Cover />
          <CategoriesList />
        </Content>
      </Wrapper>
    </ScrollView>
  );
};

export default Home;

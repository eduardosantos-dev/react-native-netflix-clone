import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  CoverAction,
  CoverActions,
  CoverActionText,
  CoverButton,
  CoverButtonText,
  CoverImage,
  CoverComponent,
  CoverMovieLogo,
  CoverMovieTitle,
} from "./styles";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Cover = () => {
  const coverUrl = {
    uri:
      "https://www.themoviedb.org/t/p/original/hHPt8wkicOJYN7P1kSvp2ygsBNh.jpg",
  };

  const coverMovieImageUrl = {
    uri:
      "https://www.firstcomicsnews.com/wp-content/uploads/2019/07/Falcon-Winter-Soldier-logo-600x257.png",
  };

  return (
    <CoverComponent>
      <CoverImage source={coverUrl}>
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            "transparent",
            "rgba(0,0,0,1)",
          ]}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}>
          <CoverMovieLogo source={coverMovieImageUrl}></CoverMovieLogo>
          <CoverMovieTitle>Top 1 no Brasil hoje</CoverMovieTitle>
          <CoverActions>
            <CoverAction>
              <MaterialIcons name="add" size={32} color="white" />
              <CoverActionText>Minha lista</CoverActionText>
            </CoverAction>

            <CoverButton>
              <MaterialIcons name="play-arrow" size={32} color="black" />
              <CoverButtonText>Assistir</CoverButtonText>
            </CoverButton>

            <CoverAction>
              <MaterialCommunityIcons
                name="information-outline"
                size={32}
                color="white"
              />
              <CoverActionText>Saiba mais</CoverActionText>
            </CoverAction>
          </CoverActions>
        </LinearGradient>
      </CoverImage>
    </CoverComponent>
  );
};

export default Cover;

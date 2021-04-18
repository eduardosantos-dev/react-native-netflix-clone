import React from "react";
import {
  MediaCardContainer,
  NetflixLogo,
  Top10Badge,
  Top10BadgetNumber,
  Top10BadgetText,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MediaCard = ({ mediaItem }) => {
  return (
    <MediaCardContainer source={{ uri: mediaItem.img }}>
      {mediaItem.isOriginalNetflix && (
        <NetflixLogo>
          <MaterialCommunityIcons name="netflix" size={24} color="red" />
        </NetflixLogo>
      )}
      {mediaItem.isTop10 && (
        <Top10Badge>
          <Top10BadgetText style={{ color: "white" }}>TOP</Top10BadgetText>
          <Top10BadgetNumber style={{ color: "white" }}>10</Top10BadgetNumber>
        </Top10Badge>
      )}
    </MediaCardContainer>
  );
};

export default MediaCard;

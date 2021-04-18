import React from "react";
import {
  HeaderContainer,
  HeaderActions,
  HeaderButton,
  Avatar,
  StickyHeader,
  StickyHeaderItem,
  StickyHeaderItemText,
  CollapseHeader,
} from "./style";

import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Header = () => {
  const avatarUrl = {
    uri:
      "https://pbs.twimg.com/profile_images/748733800826286080/dYgDOXT0_400x400.jpg",
  };

  return (
    <HeaderContainer>
      <CollapseHeader>
        <MaterialCommunityIcons name="netflix" size={48} color="red" />
        <HeaderActions>
          <HeaderButton>
            <MaterialCommunityIcons name="cast" size={24} color="white" />
          </HeaderButton>
          <HeaderButton>
            <Feather name="search" size={24} color="white" />
          </HeaderButton>
          <HeaderButton>
            <Avatar source={avatarUrl}></Avatar>
          </HeaderButton>
        </HeaderActions>
      </CollapseHeader>
      <StickyHeader>
        <StickyHeaderItem>
          <StickyHeaderItemText>Séries</StickyHeaderItemText>
        </StickyHeaderItem>
        <StickyHeaderItem>
          <StickyHeaderItemText>Filmes</StickyHeaderItemText>
        </StickyHeaderItem>
        <StickyHeaderItem>
          <StickyHeaderItemText>Minha lista</StickyHeaderItemText>
        </StickyHeaderItem>
      </StickyHeader>
    </HeaderContainer>
  );
};

export default Header;

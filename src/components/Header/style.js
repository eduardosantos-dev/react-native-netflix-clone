import { Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";
import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const HeaderContainer = styled.View`
  height: 120px;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: ${`${statusBarHeight}px`};
  z-index: 2;
`;

export const CollapseHeader = styled.View`
  background: rgba(0, 0, 0, 0);
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderActions = styled.View`
  flex-direction: row;
`;

export const HeaderButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const StickyHeader = styled.View`
  background: rgba(0, 0, 0, 0);
  flex: 1;
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StickyHeaderItem = styled.TouchableOpacity``;

export const StickyHeaderItemText = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.95);
`;

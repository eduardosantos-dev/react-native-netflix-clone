import styled from "styled-components/native";
import colors from "../../styles/colors";

export const CoverComponent = styled.View`
  height: 600px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CoverImage = styled.ImageBackground`
  flex: 1;
`;

export const CoverMovieLogo = styled.Image`
  width: 60%;
  height: 120px;
  align-self: center;
`;

export const CoverMovieTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
  align-self: center;
  margin: 25px 0;
`;

export const CoverActions = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CoverAction = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0);
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${colors.gray};
`;

export const CoverActionText = styled.Text`
  color: white;
`;

export const CoverButton = styled.TouchableOpacity`
  color: black;
  background: white;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`;

export const CoverButtonText = styled.Text`
  margin-left: 6px;
  font-size: 20px;
  font-weight: bold;
`;

import styled from "styled-components/native";
import colors from "../../styles/colors";

export const MediaCardContainer = styled.ImageBackground`
  width: 110px;
  height: 178px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
`;

export const NetflixLogo = styled.View`
  margin-top: 5px;
`;

export const Top10Badge = styled.View`
  width: 26px;
  height: 34px;
  background: #f00;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
  border-bottom-left-radius: 6px;
`;

export const Top10BadgetText = styled.Text`
  color: ${colors.black};
  font-size: 8px;
  font-weight: bold;
`;

export const Top10BadgetNumber = styled(Top10BadgetText)`
  font-size: 12px;
`;

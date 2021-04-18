import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 64px;
  height: 64px;
`;

const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const Avatar = ({ source }) => {
  return (
    <Container>
      <Image source={source} />
    </Container>
  );
};
export default Avatar;

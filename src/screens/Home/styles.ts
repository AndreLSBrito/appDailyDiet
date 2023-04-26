import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items:center;
  padding: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};

`;

export const HeaderHome = styled.View`
  width: 100%;
  height: 40px;
  margin: 33px 0;
  justify-content: space-between;
  flex-direction: row;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
`


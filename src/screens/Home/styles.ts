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
  border-radius: 100px;
`

export const SnackContainer = styled.View`
  width: 100%;
  height: 79px;
  gap: 8px;
  flex-direction: column;
  margin: 40px 20px 0
`

export const SnackText = styled.Text`
align-items: flex-start;
font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
color: ${({theme}) => theme.COLORS.GRAY_100};
`
export const HeaderSectionList = styled.Text`
  margin-top: 20px;
  font-size: ${({theme}) => theme.FONT_SIZE.LG_18}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const EmptyView = styled.View`
  display: flex;
  align-items: center;
  margin-top: 28px;
`

export const EmptyTextHeading = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.COLORS.GRAY_400};
  font-size: ${({theme}) => theme.FONT_SIZE.XL_24}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const EmptyText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.COLORS.GRAY_400};
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const EmptyImage = styled.Image`
  margin-top: 16px;
  width: 318px;
  height: 296px;
`
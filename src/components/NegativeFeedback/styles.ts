import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  gap: 40px;
`

export const Message = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  `

export const Title = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.XL_24}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.RED_DARK};
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`
export const FeedImage = styled.Image`
  width: 224px;
  height: 288px;
`
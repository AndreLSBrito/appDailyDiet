import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Trash } from "phosphor-react-native";


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border-radius: 6px;
  padding: 12px 24px;
  gap: 12px;
  align-items: center; 
  justify-content: center;
  background-color: transparent;
  border: 1px ${({theme}) => theme.COLORS.GRAY_100};
`

export const ButtonText = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Icon = styled(Trash).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.GRAY_100
}))``
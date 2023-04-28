import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 12px 24px;
  gap: 12px;
  align-items: center; 
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : 'transparent'};
  
  border: 1px ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100};
`

export const ButtonText = styled.Text<Props>`
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`

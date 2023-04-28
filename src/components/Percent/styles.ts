import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentTypeStyleProps = 'ABOVE-AVERAGE' | 'BELOW-AVERAGE'

type Props = {
  type: PercentTypeStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
  align-items: center;
  width: 100%;
  height: 102px;
  background-color: ${props => props.type === 'ABOVE-AVERAGE' ? props.theme.COLORS.GREEN_LIGHT : props.theme.COLORS.RED_LIGHT};
  padding: 20px 16px 0;
  gap: 2px;
  border-radius: 8px;
`

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL_32}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};

`

export const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({theme, type}) =>({
  size: 24,
  color: type === 'ABOVE-AVERAGE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>`
  position: absolute;
  left: 100%;
  margin: 8px 0px;
`
import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { PercentTypeStyleProps } from "../Percent/styles";
import { StatusStyleProps } from "../Meal/styles";

type Props = {
  type: PercentTypeStyleProps | StatusStyleProps
}


export const Container = styled.View`
  width: 100%;
  height: 24px;
  margin-top: 56px;
  padding-left: 24px;
  flex-direction: row;
`

export const Title = styled.Text`
  flex:1;
  text-align: center;
  padding-right: 48px;
  font-size: ${({theme}) => theme.FONT_SIZE.LG_18}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color:
    type === 'DEFAULT'
      ? theme.COLORS.GRAY_100
      : type === 'ABOVE-AVERAGE' || type === 'IN-DIET'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK,
}))<Props>``;
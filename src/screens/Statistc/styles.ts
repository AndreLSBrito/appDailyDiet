import styled from "styled-components/native";
import { PercentTypeStyleProps } from "../../components/Percent/styles";

type Props = {
  type: PercentTypeStyleProps
}


export const Container = styled.View<Props>`
  align-items: center;
  width: 100%;
  height: 100%; 
  background-color: ${({theme,type}) => type === 'DEFAULT' ? theme.COLORS.GRAY_600 : type === 'ABOVE-AVERAGE' ?theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const AvaregeStatistc = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL_32}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const TextStatistc = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_200};
`

export const NumberStatistc = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.XL_24}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 168px;
  bottom: 0px;

  background: ${({theme}) => theme.COLORS.GRAY_700};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`

export const Title = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const ContentStatistc = styled.View`
  width: 100%;
  padding: 0 24px;
  gap: 12px;
  flex-direction: column;
  height: 309px;
`
export const SequenceCard = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  height: 89px;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Frame = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
`

export const InDietCard = styled.View`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const OutDietCard = styled.View`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
`

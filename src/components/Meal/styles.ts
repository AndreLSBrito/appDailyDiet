import styled from "styled-components/native";

export type StatusStyleProps = 'IN-DIET' | 'OUT-DIET'

type Props ={
  type: StatusStyleProps
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 49px;
  padding: 14px 16px 12px;
  gap: 12px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 8px;
`

export const Hour = styled.Text`
  width: 32px;
  height: 16px;
  font-size: ${({theme}) => theme.FONT_SIZE.XS_12}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
`

export const Snack = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
})`
  width: 217px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_200};
`
export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({theme, type}) => type === 'IN-DIET' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
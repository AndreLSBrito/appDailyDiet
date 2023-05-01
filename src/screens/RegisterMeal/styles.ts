import { TextInputProps } from "react-native";
import styled from "styled-components/native";

type Props = TextInputProps 

export const Container = styled.View`
  align-items: center;
  width: 100%;
  height: 100%; 
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 104px;
  bottom: 0;
  padding: 0 24px;
  background: ${({theme}) => theme.COLORS.GRAY_700};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`

export const Form = styled.View`
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
`

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM_14}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_200};
`

export const NameInput = styled.TextInput<Props>`
  align-items: center;
  padding: 14px;
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const DescriptionInput = styled.TextInput<Props>`
  padding: 14px;
  width: 100%;
  height: 120px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  text-align: left;
`
export const FrameDateTime = styled.View`
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
`

export const FrameDate = styled.View`
  flex-direction: column;
  flex: 1;
`

export const DateTimeInput = styled.TextInput<Props>`
  padding: 14px;
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD_16}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_100};
  text-align: left;
`
export const FrameTime = styled.View`
  flex-direction: column;
  flex: 1;
`


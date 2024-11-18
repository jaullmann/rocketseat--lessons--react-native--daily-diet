import styled, { css } from "styled-components/native";

import { View } from "react-native";

type ScreenProps = {
  onDiet: boolean
}

export const Container = styled(View)<ScreenProps>`
  flex: 1;
  
  background-color: c;

  align-items: flex-start;
  justify-content: center;  
`

export const ScoreNumber = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.UL}px;        
  `};
`

export const ScoreText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`
export const Main = styled.View`
  flex: 1;

  margin-top: 168px;
  padding: 33px 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700}
`

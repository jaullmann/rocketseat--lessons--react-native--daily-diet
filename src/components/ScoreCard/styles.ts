import { TouchableOpacity } from "react-native";

import { ArrowUpRight } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export type ScoreCardStyleProps = {
    score: number;
    scoreTarget: number;
}

export const Container = styled(TouchableOpacity)<ScoreCardStyleProps>`
  position: relative;

  flex: 1;  
  align-items: center;
  justify-content: center;

  min-height: 102px;
  max-height: 102px;
  width: 100%;

  border-radius: 8px;
  padding: 20px 16px;

  background-color: ${({ theme, score, scoreTarget }) => score >= scoreTarget ? 
    theme.COLORS.GREEN_LIGHT :  theme.COLORS.RED_MID
  }  
`

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.UL}px;        
  `};
`

export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`

export const ExpandIcon = styled(ArrowUpRight).attrs<ScoreCardStyleProps>(({ theme, score, scoreTarget }) => ({
  size: 24,
  color: score >= scoreTarget ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;
  top: 8px;
  right: 8px;  
`;
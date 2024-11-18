import styled, { css } from "styled-components/native";

import { Text } from "react-native";


type cardType = "REGULAR" | "GREEN" | "RED"

export type StatisticCardProps = {
  style: cardType
}

export const Container = styled(Text)<StatisticCardProps>`
  flex: 1;  
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 16px;

  background-color: ${({ theme, style }) => style === "REGULAR" ? 
    theme.COLORS.GRAY_600 : style === "GREEN" ? 
      theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
  }  
`

export const Title = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;        
  `};
`
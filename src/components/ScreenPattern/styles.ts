import styled, { css } from "styled-components/native";
import { View } from "react-native";

type colorType = "REGULAR" | "GREEN" | "RED";

export type BackgroundProps = {
  style?: colorType;
}

export const Container = styled(View)<BackgroundProps>`  
  flex: 1;  
  width: 100%;

  padding-top: 24px;
  
  align-items: flex-start;
  justify-content: center;

  background-color: ${({ theme, style }) => style === "REGULAR" ? 
    theme.COLORS.GRAY_500 : style === "GREEN" ? 
      theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  };
`

export const Title = styled.Text`
  width: 100%;

  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;        
  `};
`

export const Main = styled.View`
  flex: 1;  
  gap: 60px;

  width: 100%;  
  margin-top: 24px;
  padding: 40px 24px;

  align-items: center;
  justify-content: space-between;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};  
`
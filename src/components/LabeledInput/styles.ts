import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;  
  gap: 4px;

  align-items: center;
  justify-content: center;

  margin-bottom: 24px;  
`

export const Label = styled.Text`  
  width: 100%;
  text-align: left;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};    
  `}
`

export const Input = styled.TextInput`  
  width: 100%;    
  height: 48px;  
  padding: 14px;
  border-radius: 6px;
  
  text-align: left;
  vertical-align: top;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};    
  `}
`

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;   
  gap: 4px;

  align-items: center;
  justify-content: flex-start;

  margin-bottom: 24px;
`

export const Label = styled.Text`
  flex: 1;
  text-align: left;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};    
  `}
`

export const Input = styled.TextInput`
  flex: 1;
  padding: 14px;
  border-radius: 6px;
  text-align: left;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};    
  `}
`

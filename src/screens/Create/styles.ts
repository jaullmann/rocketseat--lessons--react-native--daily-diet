import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  padding-top: 57px;
  
  align-items: flex-start;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Title = styled.Text`
  flex: 1;

  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;        
  `};
`

export const Main = styled.View`
  flex: 1;
  width: 100%;
  gap: 24px;

  margin-top: 24px;
  padding: 40px 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700}
`

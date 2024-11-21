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

  width: 100%;  
  margin-top: 24px;
  padding: 40px 24px;

  align-items: center;
  justify-content: space-between;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  border: 1px solid red;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Form = styled.View`  
  width: 100%;  
  
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  
  border: 1px solid green;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const DatetimeSection = styled.View`
  width: 100%;
  
  flex-direction: row;
  
  align-items: center;
  justify-content: space-between;
  
  gap: 20px;

  border: 1px solid blue;
`

export const Label = styled.Text`  
  margin-bottom: 4px;

  text-align: left;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};    
  `}
`

export const ToggleButtonsSection = styled.View`  
  flex-direction: row;
  
  width: 100%;
  gap: 8px;
`
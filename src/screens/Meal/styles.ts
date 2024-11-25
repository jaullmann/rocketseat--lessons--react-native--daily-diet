import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

type styleProps = {
  onDiet: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;    
`

export const InfoWrapper = styled.View`  
  width: 100%;
  justify-content: flex-start;
`;

export const ButtonsWrapper = styled.View`
  width: 100%;
  
  gap: 9px;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  text-align: left;  

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XG}px;        
  `};
`;

export const Description = styled.Text`
  margin-bottom: 24px;

  text-align: justify;  

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;        
  `};
`;

export const DatetimeLabel = styled.Text`
  margin-bottom: 24px;

  text-align: left;  

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`;

export const StatusCard = styled.View`  
  height: 34px;  
  margin-right: auto;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 8px 16px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const StatusCardText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;        
  `};
`;

export const StatusCardIndicator = styled(View)<styleProps>`
  width: 8px;
  height: 8px;  

  border-radius: 50%;
  background-color: ${({ theme, onDiet }) => onDiet ? 
    theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;


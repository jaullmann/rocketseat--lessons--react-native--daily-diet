import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 66px 24px 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-items: center;    
`;

export const Header = styled.View`
  width: 100%;
  height: 40px;

  margin-bottom: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  height: 37px;
  width: 82px;
`

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
`

export const Label = styled.Text`
  margin: 40px 0 8px;

  width: 100%;
  text-align: left;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
`

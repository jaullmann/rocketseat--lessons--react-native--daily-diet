import styled, { css } from "styled-components/native";
import { View } from "react-native";

export const ModalBackground = styled.View`
    position: absolute; 
    top: -170px;
    left: -40px;
    right: -40px;
    bottom: -140px;

    height: 150%;     

    z-index: 999;

    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalContainer = styled(View)`
    width: 90%;
    max-width: 360px;

    margin: 0 24px;
    padding: 40px 24px 24px 24px;
    border-radius: 8px;
    
    gap: 32px;
    align-items: center;
    justify-content: space-between;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const AlertMessage = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};    
    `};
`;

export const ButtonsContainer = styled.View`
    width: 100%;

    gap: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


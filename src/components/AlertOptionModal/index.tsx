import { ModalBackground, ModalContainer, AlertMessage, ButtonsContainer } from "./styles";
import { Button } from "@components/Button";

type Props = {
    message: string;
    leftButtonText: string;
    rightButtonText: string;    
    leftButtonFunction: () => void;
    rightButtonFunction: () => void;
}

export function AlertOptionModal({ 
    message, 
    leftButtonText, 
    rightButtonText, 
    leftButtonFunction, 
    rightButtonFunction 
}: Props){
    return(
        <ModalBackground>
            <ModalContainer>
                <AlertMessage>
                    {message}
                </AlertMessage>
                <ButtonsContainer>
                    <Button 
                        title={leftButtonText} 
                        onPress={leftButtonFunction}
                    />
                    <Button 
                        type="DELETE"
                        title={rightButtonText}    
                        icon={false}
                        onPress={rightButtonFunction}
                    />
                </ButtonsContainer>
            </ModalContainer>
        </ModalBackground>
    )
}
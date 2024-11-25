import { useNavigation } from "@react-navigation/native";
import { Button, BackIcon, ButtonProps as Props } from "./styles";


export function BackButton({ onDiet, top, styledButton = false }: Props){
  const navigation = useNavigation();

  function handlePreviousScreen() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return(
    <Button
      onPress={handlePreviousScreen}
    >
      <BackIcon 
        onDiet={onDiet} 
        styledButton={styledButton}
        style={{ top: top }}             
      />
    </Button>    
  )
}
import { Button } from "@components/Button";
import { useRoute, useNavigation } from "@react-navigation/native";
import { 
  Container, 
  Wrapper, 
  Title, 
  RegularText, 
  BoldText, 
  Image 
} from "./styles";

import OnDietImage from "@assets/happyGirl.png";
import OutDietImage from "@assets/sadBoy.png";

type RouteParams = {
  onDiet: boolean;
}

export function Feedback(){

  // const navigation = useNavigation();
  // const route = useRoute();
  // const { onDiet } = route.params as RouteParams;
  const onDiet = true;

  return(
    <Container>
      <Wrapper>
        <Title onDiet={onDiet}>
          {onDiet ? "Continue assim!" : "Que pena!"}
        </Title>
        <RegularText>
          {
            onDiet ? (
              <>
                Você continua <BoldText>dentro da dieta.</BoldText> Muito bem!
              </>
            ) : (
              <>
                Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue se esforçando e não desista!
              </>              
            )
          }
        </RegularText>
        <Image 
          source={onDiet ? OnDietImage : OutDietImage}
        />
        <Button 
          title="Ir para a página inicial"
        />
      </Wrapper>
    </Container>
  );
}
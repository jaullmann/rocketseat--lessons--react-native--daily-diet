import { TouchableOpacityProps } from "react-native";
import { Container, Timestamp, MealDescription, CardStatus, VerticalLineIcon } from "./styles";

type Props = TouchableOpacityProps & {  
  time: string,
  title: string,  
  onDiet: boolean,
}

export function MealCard({ time, title, onDiet }: Props){
  return(
    <Container onDiet={onDiet}>
      
      <Timestamp>
        {time}
      </Timestamp>

      <VerticalLineIcon />

      <MealDescription> 
        {title}
      </MealDescription>

      <CardStatus onDiet={onDiet}/>

    </Container>
  )
}

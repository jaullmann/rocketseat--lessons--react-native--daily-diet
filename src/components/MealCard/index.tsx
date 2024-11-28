import { TouchableOpacityProps } from "react-native";
import { Container, Timestamp, MealDescription, CardStatus, VerticalLineIcon } from "./styles";

type Props = TouchableOpacityProps & {  
  time: string,
  title: string,  
  onDiet: boolean,
}

export function MealCard({ time, title, onDiet, ...rest }: Props){
  return(
    <Container onDiet={onDiet} {...rest}>
      
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

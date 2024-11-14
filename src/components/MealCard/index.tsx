import { Container, Timestamp, MealDescription, CardStatus, VerticalLineIcon } from "./styles";

function formattedTime(date: Date): string {
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${hour}:${minute}`
}

type Props = {  
  time: Date,
  description: string,
  onDiet: boolean,
}

export function MealCard({ time, description, onDiet }: Props){
  return(
    <Container onDiet={onDiet}>
      
      <Timestamp>
        {formattedTime(time)}
      </Timestamp>

      <VerticalLineIcon />

      <MealDescription>
        {description}
      </MealDescription>

      <CardStatus onDiet={onDiet}/>

    </Container>
  )
}

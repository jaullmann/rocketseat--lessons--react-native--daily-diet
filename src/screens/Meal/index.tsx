import { useState } from "react";
import { ScreenPattern } from "@components/ScreenPattern";
import { Button } from "@components/Button";
import { InfoWrapper, ButtonsWrapper, Title, Description, 
  DatetimeLabel, StatusCard, StatusCardText, 
  StatusCardIndicator} from "./styles";


export function Meal(){

  const [title, setTitle] = useState('Carregando...');
  const [description, setDescription] = useState('Carregando...');
  const [date, setDate] = useState('00/00/0000');
  const [time, setTime] = useState('00:00');
  const [onDiet, setOnDiet] = useState(true);

  return(
    <ScreenPattern title="Refeição">
      <InfoWrapper>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <DatetimeLabel>
          {date + ' às ' + time}
        </DatetimeLabel>
        <StatusCard>
          <StatusCardIndicator onDiet/>
          <StatusCardText>            
            {onDiet ? "dentro da dieta" : "fora da dieta"}            
          </StatusCardText>
        </StatusCard>
      </InfoWrapper>
      <ButtonsWrapper>
        <Button 
          title="Editar refeição"
          type="EDIT"
        />
        <Button 
          title="Excluir refeição"
          type="DELETE"          
        />
      </ButtonsWrapper>
    </ScreenPattern>
  )
}

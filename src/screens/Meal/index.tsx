import { useState } from "react";
import { ScreenPattern } from "@components/ScreenPattern";
import { Button } from "@components/Button";
import { InfoWrapper, ButtonsWrapper, Title, Description, 
  DatetimeLabel, StatusCard, StatusCardText, 
  StatusCardIndicator} from "./styles";


export function Meal(){

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [onDiet, setOnDiet] = useState(true);

  return(
    <ScreenPattern title="Refeição">
      <InfoWrapper>

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

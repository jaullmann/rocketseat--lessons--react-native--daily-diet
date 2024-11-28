import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";

import { mealGetByKey } from "@storage/meal/mealGetByKey";
import { mealDeleteByKey } from "@storage/meal/mealDeleteByKey";

import { Loading } from "@components/Loading";
import { Button } from "@components/Button";
import { ScreenPattern } from "@components/ScreenPattern";
import { AlertOptionModal } from "@components/AlertOptionModal";
import { Container, InfoWrapper, ButtonsWrapper, Title, Description, 
  DatetimeLabel, StatusCard, StatusCardText, 
  StatusCardIndicator} from "./styles";

type RouteParams = {
  id: string;
}

export function Meal(){
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('Carregando...');
  const [description, setDescription] = useState('Carregando...');
  const [date, setDate] = useState('00/00/0000');
  const [time, setTime] = useState('00:00');
  const [onDiet, setOnDiet] = useState(true);
  const [activeAlert, setActiveAlert] = useState(false);
  
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;
  
  function closeAlert(){
    setActiveAlert(false);
  }
  
  function handleDeleteMeal(){
    setActiveAlert(true);
  }

  function handleUpdateMeal(){
    navigation.navigate('create', { id });
  }

  async function fetchMeal(){
    setIsLoading(true);
    try {
      const data = await mealGetByKey(id);
      if (data) {
        setTitle(data.title);
        setDescription(data.description);
        setDate(data.date);
        setTime(data.time);
        setOnDiet(data.onDiet);
      }    
      setIsLoading(false);  
    } catch(error: any) {
      Alert.alert("Refeição", error.message)
      navigation.navigate('home');
    } 
  }
  
  async function confirmDeleteMeal(){    
    await mealDeleteByKey(id);
    setActiveAlert(false);
    navigation.navigate('home');
  }  
  
  useEffect(() => {
    fetchMeal();
  }, [])

  return(
    <Container>
      <ScreenPattern title="Refeição">

        {
          activeAlert &&
          <AlertOptionModal 
            message="Deseja realmente excluir o registro da refeição?"
            leftButtonText="Cancelar"
            rightButtonText="Sim, excluir"
            leftButtonFunction={closeAlert}
            rightButtonFunction={confirmDeleteMeal}
          />
        }

        { isLoading ? <Loading /> : (
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
              <StatusCardIndicator onDiet={onDiet}/>
              <StatusCardText>            
                {onDiet ? "dentro da dieta" : "fora da dieta"}            
              </StatusCardText>
            </StatusCard>
          </InfoWrapper>
        )}
        
        <ButtonsWrapper>        
          <Button 
            title="Editar refeição"
            type="EDIT"
            onPress={handleUpdateMeal}
            disabled={isLoading}
            />
          <Button 
            title="Excluir refeição"
            type="DELETE"
            onPress={handleDeleteMeal}  
            disabled={isLoading}        
            />
        </ButtonsWrapper>
      </ScreenPattern>
    </Container>
  )
}

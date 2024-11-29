import { View } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { mealGetByKey } from "@storage/meal/mealGetByKey";
import { mealUpdate } from "@storage/meal/mealUpdate";
import { mealAdd } from "@storage/meal/mealAdd";

import { formattedDate, formattedTime, formatAmericanDate, isValidDate, isValidTime } from "@utils/functions";

import { Form, InputWrapper, DatetimeSection, Label, ToggleButtonsSection } from "./styles";
import { ScreenPattern } from "@components/ScreenPattern";
import { LabeledInput } from "@components/LabeledInput";
import { ToggleButton } from "@components/ToggleButton";
import { Loading } from "@components/Loading";
import { Button } from "@components/Button";
import { Alert } from "react-native";


type RouteParams = {
  id?: string;
}

export function Create(){
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [onDietButtonMarked, setOnDietButtonMarked] = useState(false);
  const [outDietButtonMarked, setOutDietButtonMarked] = useState(false);

  const navigation = useNavigation();

  const route = useRoute()
  const { id } = (route.params || {}) as RouteParams;

  function handleToggleButtons(buttonPressed: string){
    if (buttonPressed === 'yes') {
      setOnDietButtonMarked(true);
      if (outDietButtonMarked) {
        setOutDietButtonMarked(false);
      }
    } else {
      setOutDietButtonMarked(true);
      if (onDietButtonMarked) {
        setOnDietButtonMarked(false);
      }
    }
  }

  function isFormFilled(): boolean{
    const titleFilled = Boolean(title);
    const dateFilled = Boolean(date);
    const timeFilled = Boolean(time);
    const dietOptionChecked = onDietButtonMarked || outDietButtonMarked;
    return titleFilled && dateFilled && timeFilled && dietOptionChecked
  }

  async function fetchMeal(){
    if (id) {
      setIsLoading(true);
      try {
        const data = await mealGetByKey(id);
        if (data) {
          setTitle(data.title);
          setDescription(data.description);
          setDate(data.date);
          setTime(data.time);
          setOnDietButtonMarked(data.onDiet);
          setOutDietButtonMarked(!data.onDiet);
        }    
        setIsLoading(false);  
      } catch(error: any) {
        Alert.alert("Refeição", error.message)
        navigation.navigate('home');
      } 
    }    
  }

  async function handleMeal() {
    try {
      if (!isValidDate(date)) {
        return Alert.alert(
          'Cadastro de refeição',
          'Insira uma data com formato válido (ex.: 30/12/2024)'
        );
      }
    
      if (!isValidTime(time)) {
        return Alert.alert(
          'Cadastro de refeição',
          'Insira uma hora com formato válido (ex.: 13:30)'
        );
      }
    
      const datetime = `${formatAmericanDate(date)} ${time}`;
    
      if (description.replace(/\s+/g, '').length === 0) {
        return Alert.alert(
          'Cadastro de refeição',
          'Deseja salvar refeição sem incluir uma descrição?',
          [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Cadastrar',
              onPress: async () => {
                await mealAdd({ title, description, date, time, onDiet: onDietButtonMarked, key: datetime });              
                navigation.navigate('feedback', { onDiet: onDietButtonMarked });
              },
            },
          ]
        );
      }

      const meal = {
        title, 
        description, 
        date, 
        time, 
        onDiet: 
        onDietButtonMarked, 
        key: id ? id : datetime
      }
      
      if (id) {
        await mealUpdate(meal);
      } else {
        await mealAdd(meal);
      }      
    
      navigation.navigate('feedback', { onDiet: onDietButtonMarked });
    
    } catch(error: any) {      
      return Alert.alert('Cadastro de refeição', error.message);
    }
    
  }
  
  useEffect(() => {
    if (id) {
      fetchMeal()
    } else {
      setIsLoading(false);
    };
  }, [])

  return(    
    <ScreenPattern
      title={id ? "Editar refeição" : "Nova refeição"}
    >
      {
        isLoading ? 
          <Loading /> :
          (
            <Form>        
              <LabeledInput 
                label="Nome"
                value={title}
                onChangeText={setTitle}    
                maxLength={32}        
              />
              <LabeledInput 
                label="Descrição"
                multiline
                value={description}
                onChangeText={setDescription}
                height={120} 
                maxLength={180} 
              />

              <DatetimeSection>
                <InputWrapper>
                  <LabeledInput 
                    label="Data"
                    value={date}
                    onChangeText={setDate}
                    maxLength={10}
                    placeholder={formattedDate(new Date())}
                    format="date"
                  />
                </InputWrapper>
                <InputWrapper>
                  <LabeledInput 
                    label="Hora"
                    value={time}
                    onChangeText={setTime}
                    maxLength={5}
                    placeholder={formattedTime(new Date())}
                    format="time"
                  />
                </InputWrapper>
              </DatetimeSection>

              <View>
                <Label>
                  Está dentro da dieta?
                </Label>
                <ToggleButtonsSection>
                  <ToggleButton 
                    title="Sim"
                    active={onDietButtonMarked}
                    style="PRIMARY"
                    onPress={() => handleToggleButtons("yes")}
                  />
                  <ToggleButton 
                    title="Não"
                    active={outDietButtonMarked}
                    style="SECONDARY"
                    onPress={() => handleToggleButtons("no")}
                  />
                </ToggleButtonsSection>            
              </View>  
                      
            </Form>
          )
      }

      <Button 
        title={ id ? "Salvar alterações" : "Cadastrar refeição" }
        onPress={handleMeal}
        disabled={!isFormFilled()}
      />
    </ScreenPattern>
    
  )
}

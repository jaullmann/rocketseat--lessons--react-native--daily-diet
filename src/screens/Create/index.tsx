import { View } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { mealAdd } from "@storage/meal/mealAdd";

import { formattedDate, formattedTime, formatAmericanDate, isValidDate, isValidTime } from "@utils/functions";

import { Form, InputWrapper, DatetimeSection, Label, ToggleButtonsSection } from "./styles";
import { ScreenPattern } from "@components/ScreenPattern";
import { LabeledInput } from "@components/LabeledInput";
import { ToggleButton } from "@components/ToggleButton";
import { Button } from "@components/Button";
import { Alert } from "react-native";


type RouteParams = {
  group: string;
}

export function Create(){
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [onDietButtonMarked, setOnDietButtonMarked] = useState(false);
  const [outDietButtonMarked, setOutDietButtonMarked] = useState(false);

  const navigation = useNavigation();

  const route = useRoute()
  const id = route.params as RouteParams;
  const newMeal = Boolean(!id);

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

  function handleCreateMeal(){
    if (!isValidDate(date)) {
      return Alert.alert('Cadastro de refeição', 'Insira uma data com formato válido (ex.: 30/12/2024)');
    }
    if (!isValidTime(time)) {
      return Alert.alert('Cadastro de refeição', 'Insira uma hora com formato válido (ex.: 13:30)');
    }
    const datetime = `${formatAmericanDate(date)} ${time}`
    if (!description) {
      Alert.alert(
        'Cadastro de refeição',
        'Deseja salvar refeição sem incluir uma descrição?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Cadastrar', onPress: () => mealAdd({ title, description, datetime, onDiet: onDietButtonMarked })}
        ]
      )      
    }
    Alert.alert('Cadastro de refeição', 'Refeição gravada com sucesso!');
    return navigation.navigate("home");
  }

  return(    
    <ScreenPattern
      title={newMeal ? "Nova refeição" : "Editar refeição"}
    >
      
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
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput 
              label="Hora"
              value={time}
              onChangeText={setTime}
              maxLength={5}
              placeholder={formattedTime(new Date())}
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

      <Button 
        title={newMeal ? "Cadastrar refeição" : "Salvar alterações" }
        onPress={handleCreateMeal}
        disabled={!isFormFilled()}
      />
    </ScreenPattern>
    
  )
}

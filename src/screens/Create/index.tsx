import { View } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Container, Title, Main, Form, InputWrapper,
  DatetimeSection, Label, ToggleButtonsSection } from "./styles";
import { ScreenPattern } from "@components/ScreenPattern";
import { BackButton } from "@components/BackButton";
import { LabeledInput } from "@components/LabeledInput";
import { ToggleButton } from "@components/ToggleButton";
import { Button } from "@components/Button";

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

  // const route = useRoute()
  // const { newMeal } = route.params as RouteParams;
  const newMeal = true;

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
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput 
              label="Hora"
              value={time}
              onChangeText={setTime}
              maxLength={5}
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
      />
    </ScreenPattern>
    
  )
}

import { View } from "react-native";
import { useState } from "react";
import { Container, Title, Main, Form, 
  DatetimeSection, Label, ToggleButtonsSection } from "./styles";
import { BackButton } from "@components/BackButton";
import { LabeledInput } from "@components/LabeledInput";
import { ToggleButton } from "@components/ToggleButton";
import { Button } from "@components/Button";

export function Create(){

  const [newMeal, setNewMeal] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, settime] = useState('');

  return(
    <Container>
      <BackButton />
      <Title>
        {newMeal ? "Nova Refeição" : "Editar Refeição" }
      </Title>

      <Main>

        <Form>
          <LabeledInput label="Nome" />
          <LabeledInput label="Descrição" />
          <DatetimeSection>
            <LabeledInput label="Data" />
            <LabeledInput label="Hora" />
          </DatetimeSection>
          <View>
            <Label>
              Está dentro da dieta?
            </Label>
            <ToggleButtonsSection>
              <ToggleButton 
                title="Sim"
                active={false}
                style="PRIMARY"
              />
              <ToggleButton 
                title="Não"
                active={false}
                style="SECONDARY"
              />
            </ToggleButtonsSection>            
          </View>          
        </Form>

        <Button 
          title={newMeal ? "Cadastrar refeição" : "Salvar alterações" }
        />
      </Main>
    </Container>
  )
}

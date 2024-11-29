import { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, Label, Input } from "./styles";

type Props = TextInputProps & {
  label: string;
  height?: number;
  format?: "date" | "time";
};

export function LabeledInput({ label, height, format, onChangeText, ...rest }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleTextChange = (text: string) => {
    let formattedText = text;

    if (format === "date") {
      formattedText = text.replace(/\D/g, ""); 
      if (formattedText.length > 2) formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
      if (formattedText.length > 5) formattedText = `${formattedText.slice(0, 5)}/${formattedText.slice(5, 9)}`;
    } else if (format === "time") {
      formattedText = text.replace(/\D/g, ""); 
      if (formattedText.length > 2) formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
    } else {
      formattedText = text;
    }

    setInputValue(formattedText);
    if (onChangeText) onChangeText(formattedText);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={inputValue}
        onChangeText={handleTextChange} 
        style={{ height }}
        keyboardType={format ? "numeric" : "default"} 
        {...rest}
      />
    </Container>
  );
}

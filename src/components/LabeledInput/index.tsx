import { TextInputProps } from "react-native";

import { Container, Label, Input } from "./styles";

type Props = TextInputProps & {
  label: string,
  height?: number,
  format?: "date" | "time",
}

export function LabeledInput({ label, height, format, ...rest }: Props){

  return(
    <Container>
      <Label>
        {label}
      </Label>
      <Input 
        style={{ height }} 
        {...rest} 
      />
    </Container>
  )
}
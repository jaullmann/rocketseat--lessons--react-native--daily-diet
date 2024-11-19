import { BackIcon, ButtonProps as Props } from "./styles";


export function BackButton({ onDiet, styledButton = false }: Props){
  return(
    <BackIcon 
      onDiet={onDiet} 
      styledButton={styledButton} 
    />
  )
}
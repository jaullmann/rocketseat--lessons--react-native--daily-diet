import { BackIcon, ButtonProps as Props } from "./styles";


export function BackButton({ onDiet, top, styledButton = false }: Props){
  return(
    <BackIcon 
      onDiet={onDiet} 
      styledButton={styledButton}
      style={{ top: top }}       
    />
  )
}
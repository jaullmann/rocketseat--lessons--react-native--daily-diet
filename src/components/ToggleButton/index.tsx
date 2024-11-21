import { TouchableOpacityProps } from 'react-native';
import { StyleProps, Button, Title, ButtonIndicator } from './styles';

type Props = TouchableOpacityProps & StyleProps & {
  title: string;
}

export function ToggleButton({ title, active, style }: Props){
  return(
    <Button 
      active={active} 
      style={style}
    >      
      <ButtonIndicator 
        active={active} 
        style={style}
      />
      <Title>
        {title}
      </Title>
    </Button>
  )
}
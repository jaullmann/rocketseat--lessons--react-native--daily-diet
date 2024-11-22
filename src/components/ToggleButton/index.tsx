import { TouchableOpacityProps } from 'react-native';
import { StyleProps, Button, Title, ButtonIndicator } from './styles';

type Props = TouchableOpacityProps & StyleProps & {
  title: string;
}

export function ToggleButton({ title, active, style, ...rest }: Props){
  return(
    <Button 
      active={active} 
      style={style}
      {...rest}
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
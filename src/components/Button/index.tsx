import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title, PlusIcon, EditIcon, DeleteIcon } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: boolean;
}

export function Button({ title, type = 'REGULAR', icon = true, ...rest }: Props){
    return(
        <Container type={type} {...rest}>
            { 
              type === 'REGULAR' && 
              <Title> {title} </Title> 
            }
            { 
              type === 'ADD' && 
              <>
                {icon && <PlusIcon />}
                <Title> {title} </Title>
              </>               
            }
            { 
              type === 'EDIT' && 
              <>
                {icon && <EditIcon />}
                <Title> {title} </Title>
              </>               
            }
            { 
              type === 'DELETE' && 
              <>
                {icon && <DeleteIcon />}
                <Title style={{ color: '#1B1D1E' }}> {title} </Title>
              </>               
            }
        </Container>
    )
}
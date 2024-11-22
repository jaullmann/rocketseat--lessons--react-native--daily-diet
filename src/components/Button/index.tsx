import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title, PlusIcon, EditIcon, DeleteIcon } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'REGULAR', ...rest }: Props){
    return(
        <Container type={type} {...rest}>
            { 
              type === 'REGULAR' && 
              <Title> {title} </Title> 
            }
            { 
              type === 'ADD' && 
              <>
                <PlusIcon />
                <Title> {title} </Title>
              </>               
            }
            { 
              type === 'EDIT' && 
              <>
                <EditIcon />
                <Title> {title} </Title>
              </>               
            }
            { 
              type === 'DELETE' && 
              <>
                <DeleteIcon />
                <Title style={{ color: '#1B1D1E' }}> {title} </Title>
              </>               
            }
        </Container>
    )
}
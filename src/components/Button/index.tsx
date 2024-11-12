import { TouchableOpacityProps } from "react-native";

import { 
    ButtonTypeStyleProps,
    Container, 
    Title, 
    PlusIcon, 
    EditIcon, 
    TrashIcon,
} from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'REGULAR', ...rest }: Props){
    return(
        <Container {...rest}>
            { type === 'REGULAR' && <Title> {title} </Title> }
        </Container>
    )
}
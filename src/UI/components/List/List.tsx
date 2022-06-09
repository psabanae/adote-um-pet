import { Button } from '@mui/material';
import { 
ListStyled,
    ItemListStyled,
    Photo,
    InfoDiv,
    Name,
    Description    
} from './List.style';
import Pets from '../../../data/@types/Pets';
import { TextService } from '../../../data/services/TextService';


interface ListProps {
    pets: Pets[];
    onSelect: (pet: Pets) => void;
}

export default function List(props: ListProps) {
    const maxSizeText = 200;

    return (
        <ListStyled>
            {props.pets.map(pet => (
            <ItemListStyled key={pet.id}>
                <Photo src={pet.foto} alt={pet.nome} />
                <InfoDiv>
                    <Name>{pet.nome}</Name>
                    <Description>{TextService.limitText(pet.historia, maxSizeText)}</Description>
                    <Button variant={'contained'} fullWidth onClick={() => props.onSelect(pet)}>Adotar {pet.nome}</Button>
                </InfoDiv>
            </ItemListStyled>
            ))}
        </ListStyled>
    )
};
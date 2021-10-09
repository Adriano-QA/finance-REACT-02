import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    onAddItem: (item: Item) => void;
}

export const InputArea = ({ onAddItem }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2021,9,23),
            category: 'food',
            title: 'Teste item',
            value: 345.56
        };
        onAddItem(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}
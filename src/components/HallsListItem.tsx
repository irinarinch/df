import { IHall } from '../types';


interface IProps {
    hall: IHall,
    onClick: (id: number) => void,
}

const HallsListItem = ({hall, onClick}: IProps) => {
    return (
        <li>
          Зал {hall.id}  
          <button 
            className="conf-step__button conf-step__button-trash" 
            onClick={() => {
                onClick(hall.id);
            }

            }
          />
        </li>
      );
}

export default HallsListItem
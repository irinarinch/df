import { IHall } from '../types';
import { hallService } from '../services/hall.service';

interface IProps {
    hall: IHall
}

const HallsListItem = ({hall}: IProps) => {
    return (
        <li>
          Зал {hall.id}  
          <button 
            className="conf-step__button conf-step__button-trash" 
            onClick={() => {hallService.deleteHall(hall.id)}}
          />
        </li>
      );
}

export default HallsListItem
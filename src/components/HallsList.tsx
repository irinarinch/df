import { IHall } from "../types"
import HallsListItem from "../components/HallsListItem";

interface IListProps {
  halls: IHall[],
}

const HallsList = ({halls: halls}: IListProps) => {
  return (
    <ul className="conf-step__list">
      {halls.map(hall => (<HallsListItem key={hall.created_at} hall={hall}/>))}
    </ul>
  )
}

export default HallsList
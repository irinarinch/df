import { IHall } from "../types"
import HallsListItem from "../components/HallsListItem";

interface IListProps {
  halls: IHall[],
  onClick: (id: number) => void
}

const HallsList = ({halls, onClick}: IListProps) => {
  return (
    <ul className="conf-step__list">
      {halls.map(hall => (<HallsListItem key={hall.created_at} hall={hall} onClick={() => onClick(hall.id)} />))}
    </ul>
  )
}

export default HallsList
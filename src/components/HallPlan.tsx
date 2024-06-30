import { IHall } from "../types"
import Chear from "./Chear"
import Row from "./Row"

interface IHallProps {
    hall: IHall | null,
    editRow: number,
    editPlace: number,
}

const HallPlan = ({hall, editRow, editPlace}: IHallProps) => {
  function show(row: number, place: number) {
    return (
      [...Array(row)].map(() => (
          <Row>
            {[...Array(place)].map(()=>(<Chear type="standart"/>))}
          </Row>
        )
      )
    )
  }
  
  return (
    <div className="conf-step__hall">
        <div className="conf-step__hall-wrapper">
          {!hall 
            ? <span>Не выбран зал</span> 
            : show(!editRow ? hall.row : editRow, !editPlace ? hall.place : editPlace)}
        </div>
    </div>
  )
}

export default HallPlan
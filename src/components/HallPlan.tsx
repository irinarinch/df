import { chairService } from "../services/chair.service";
import { IChair, IHall } from "../types";
import Chair from "./Chair";
import Paragraph from "./Paragraph";
import Row from "./Row";

interface IHallProps {
  hall: IHall | null;
  editRow: number;
  editPlace: number;
  chairs: IChair[];
}

const HallPlan = ({ hall, editRow, editPlace, chairs }: IHallProps) => {
  function onClick(e: React.MouseEvent) {
    console.log(e.target);
  }

  function show(hall: IHall, row: number, place: number) {
    const chair = chairs.find((chair) => chair.id === hall.id);
    if (!chair) return;


    return [...Array(row)].map(() => (
      <Row>
        {[...Array(place)].map(() => (                    
            <Chair key={chair.created_at} chair={chair} onClick={onClick}/>
        ))}
      </Row>
    ));
  }

  return (
    <>
    <Paragraph title="Теперь вы можете указать типы кресел на схеме зала:"/>
    <div className="conf-step__legend">
        <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
        <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
        <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
        <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
    </div>
    <div className="conf-step__hall">
      <div className="conf-step__hall-wrapper">
        {!hall ? (
          <span>Не выбран зал</span>
        ) : (
          show(
            hall,
            editRow ? editRow : hall.row,
            editPlace ? editPlace : hall.place 
          )
        )}
      </div>
    </div>
    </>
  );
};

export default HallPlan;

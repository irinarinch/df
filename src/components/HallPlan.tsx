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

    function show(row: number, place: number) {
        // Создаем массив для хранения кресел для каждого места
        const hallChairs: IChair[][] = [];
      
        // Инициализируем массив кресел для каждого ряда
        for (let r = 1; r <= row; r++) {
          hallChairs[r - 1] = []; // Индекс массива соответствует номеру ряда
          for (let p = 1; p <= place; p++) {
            // Находим кресло в массиве chairs, которое соответствует текущему ряду и месту
            const chair = chairs.find(
              (c) => c.hall_row === r && c.place === p
            );
      
            // Добавляем найденное кресло в массив hallChairs 
            // или создаем заблокированное кресло, если кресло не найдено
            hallChairs[r - 1][p - 1] = chair || {
              type: 'disabled',
              hall_row: r,
              place: p,
            };
          }
        }
      
        // Отрисовываем ряды кресел
        return hallChairs.map((rowChairs, row) => (
          <Row key={row} row={row + 1} chairs={rowChairs} />
        ));
      }
      
      // Функция для отрисовки ряда
      function Row({ row, chairs }: { row: number; chairs: IChair[] }) {
        return (
          <div key={row} className="conf-step__row">
            {chairs.map((chair, place) => (
              <Chair
                key={`${row}-${place}`}
                chair={chair}
                onClick={onClick}
              />
            ))}
          </div>
        );
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

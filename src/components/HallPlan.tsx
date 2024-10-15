
import { IChair, IHall } from "../types";
import Chair from "./Chair";
import Paragraph from "./Paragraph";
import Row from "./Row";
import React from 'react';

interface IHallProps {
    hall: IHall;
    chairs: IChair[];
    onClick: (e: React.MouseEvent) => number;
}

const HallPlan = ({hall, chairs, onClick}: IHallProps) => {
    const show = (chairs: IChair[]) => {
        for(let i = 1; i <= hall.row; i++) {
            <Row
                key={i} // Уникальный ключ для каждого ряда
                row={i} 
                chairs={chairs} // Передаем все кресла
                onClick={(e) => onClick} 
            />
        }

        
    }

    return (
        <>
            <Paragraph title="Теперь вы можете указать типы кресел на схеме зала:" />
            <div className="conf-step__legend">
                <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
                <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
                <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
                <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
            </div>
            <div className="conf-step__hall">
                <div className="conf-step__hall-wrapper">
                    {!hall ? <span>Не выбран зал</span> : show(chairs)}
                </div>
            </div>
        </>
    );
}

export default HallPlan;

// const HallPlan = ({ hall, editRow, editPlace, chairs, onClick }: IHallProps) => {

//   const show = (row: number, place: number) => {
//     const hallChairs: IChair[][] = [];

//     for (let r = 1; r <= row; r++) {
//       hallChairs[r - 1] = [];
//       for (let p = 1; p <= place; p++) {
//         const chair = chairs.find(c => c.hall_row === r && c.place === p);
//         const likeChair: IChair = {
//           type: 'standart',
//           hall_row: r,
//           place: p,
//           id: 0,
//           active: false,
//           free: false,
//           hall_id: 0,
//           price: 0,
//           created_at: "",
//           updated_at: ""
//         };
//         hallChairs[r - 1][p - 1] = chair || likeChair;
//       }
//     }

//     return hallChairs.map((rowChairs, row) => (
//       <Row key={row} row={row + 1} chairs={rowChairs} />
//     ));
//   };

//   const Row = ({ row, chairs }: { row: number; chairs: IChair[] }) => (
//     <div className="conf-step__row">
//       {chairs.map((chair, place) => (
//         <Chair
//           key={`${row}-${place}`}
//           chair={chair}
//           onClick={onClick}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <Paragraph title="Теперь вы можете указать типы кресел на схеме зала:" />
//       <div className="conf-step__legend">
//         <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
//         <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
//         <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
//         <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
//       </div>
//       <div className="conf-step__hall">
//         <div className="conf-step__hall-wrapper">
//           {!hall ? (
//             <span>Не выбран зал</span>
//           ) : (
//             show(editRow ? editRow : hall.row, editPlace ? editPlace : hall.place)
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HallPlan;



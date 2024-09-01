// interface IChearProps {
//   type: "standart" | "vip";
// }

import { IChair } from "../types";

// const classes = [
//   "conf-step__chair conf-step__chair_standart",
//   "conf-step__chair conf-step__chair_vip",
//   "conf-step__chair conf-step__chair_disabled",
// ];

interface IProps {
    chair: IChair;
    onClick: (e: React.MouseEvent) => number; 
}

function Chair({chair, onClick}: IProps) {


return (
    <span
        data-id={chair.id}
        data-hall={chair.hall_id}
        data-row={chair.hall_row}
        data-place={chair.place}
        data-type={chair.type}
        className={`conf-step__chair conf-step__chair_${chair.type}`}
        onClick={onClick}
    ></span>
);
}

export default Chair;


//   function onClick(e: any) {
//     const newClassIndex =
//       (classes.indexOf(e.target.className) + 1) % classes.length;
//     e.target.className = classes[newClassIndex];
//     console.log(e.target);
//   }
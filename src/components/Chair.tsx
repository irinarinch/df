// interface IChearProps {
//   type: "standart" | "vip";
// }

import { IChair } from "../types";

const classes = [
  "conf-step__chair conf-step__chair_standart",
  "conf-step__chair conf-step__chair_vip",
  "conf-step__chair conf-step__chair_disabled",
];

const types = [
    "standart",
    "vip",
    "disabled"
];



interface IProps {
    chair: IChair;
    // onClick: (e: React.MouseEvent) => number; 
}

function Chair({chair}: IProps) {
    function ert(e: any) {
        console.log(chair);
        const newClassIndex = (types.indexOf(e.target.dataset.type) + 1) % types.length;
        chair.type = types[newClassIndex];
        e.target.className = classes[newClassIndex];
        e.target.dataset.type = chair.type;
        console.log(e.target);
    }
    
    return (
        <span
            data-id={chair.id}
            data-hall={chair.hall_id}
            data-row={chair.hall_row}
            data-place={chair.place}
            data-type={chair.type}
            className={`conf-step__chair conf-step__chair_${chair.type}`}
            onClick={(e) => ert(e)}
        ></span>
    );
}

export default Chair;



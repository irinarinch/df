// interface IChearProps {
//   type: "standart" | "vip";
// }

import { IChair } from "../types";





interface IProps {
    chair: IChair; 
    onClick: () => void;
}

function Chair({chair, onClick}: IProps) {
    // const update = (e: any) => {        
    //     const newClassIndex = (types.indexOf(e.target.dataset.type) + 1) % types.length;
    //     chair.type = types[newClassIndex];
    //     e.target.className = classes[newClassIndex];
    //     e.target.dataset.type = chair.type;
    // }
    
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



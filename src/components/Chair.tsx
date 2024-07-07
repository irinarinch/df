// interface IChearProps {
//   type: "standart" | "vip";
// }

import { IChair } from "../types";

const classes = [
  "conf-step__chair conf-step__chair_standart",
  "conf-step__chair conf-step__chair_vip",
  "conf-step__chair conf-step__chair_disabled",
];

function Chair(props: IChair) {
  function onClick(e: any) {
    const newClassIndex =
      (classes.indexOf(e.target.className) + 1) % classes.length;

    e.target.className = classes[newClassIndex];
    console.log(props);
  }

  return (
    <span
      className={`conf-step__chair conf-step__chair_${props.type}`}
      onClick={onClick}
    ></span>
  );
}

export default Chair;

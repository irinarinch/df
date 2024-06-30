import { IHall } from "../types";
import Paragraph from "./Paragraph";

interface IListProps {
    array: IHall[],
    onChange: (e:any)=>void, // !!!!! any 
  }
  

const SelectorsBox = ({array, onChange}: IListProps) => {
  
  return (
    <>
    <Paragraph title="Выберите зал для конфигурации:"/>
    <ul className="conf-step__selectors-box">
        {array.map(hall => {
            return (
                <li key={hall.created_at}>
                    <input 
                        type="radio" 
                        className="conf-step__radio" 
                        name="hall" 
                        value={hall.id}
                        onChange={onChange}
                    />
                    <span className="conf-step__selector">Зал {hall.id}</span>
                </li>
            );
        })}
        </ul>
    </>

  );
}

export default SelectorsBox
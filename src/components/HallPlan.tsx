
import { useEffect, useState } from "react";
import { hallService } from "../services/hall.service";
import { IChair, IHall } from "../types";
import Paragraph from "./Paragraph";
import Row from "./Row";

interface IHallProps {
    hall: IHall|null;
    currentRow: number;
    currentPlace: number;
    // chairs: IChair[];
    // onClick: (e: React.MouseEvent) => number;
}

const HallPlan = ({hall, currentRow, currentPlace}: IHallProps) => {
    const [chairs, setChairs] = useState<IChair[]>([]);    
    
    const fetch = async () => {
        if (!hall) return; 
        setChairs(await hallService.getChairs(hall.id));
        
    }; 

    useEffect(() => {
        fetch();
    }, [hall]);

    const foo = () => {
        const updatedChairs: IChair[] = [];
        for (let i = 1; i <= currentRow; i++) {
            for (let j = 1; j <= currentPlace; j++) {
                const chair = updatedChairs.find(chair => chair.hall_row === i && chair.place === j);
                
                if (chair) {
                    /*
                    const up = array.find(item => item.id === chair.id);
                    if (up) {
                        const updatedChair = await chairService.updateChair(chair.id, {
                            // Вставьте тут ваши обновленные данные кресла
                            "type": `${up.type}` // возможно, тип кресла нужно обновить
                        });

                        console.log(updatedChair);
                        // Обновляем кресло в локальной копии
                        const index = updatedChairs.findIndex(c => c.id === chair.id);
                        if (index !== -1) {
                            updatedChairs[index] = updatedChair; // Заменяем обновлённое кресло
                        }
                    }
                        */
                    

  

                } else {
                    console.log('updatedChairs ' + updatedChairs[0]?.type);
                    // Создать кресло
                    const newChair: IChair = {
                        hall_id: hall?.id,
                        hall_row: i,
                        place: j,
                        type: "standart", // или другой тип, если требуется
                    };

                    // Добавляем новое кресло в локальную копию
                    updatedChairs.push(newChair);

            
                }
            }
        }
        console.log(updatedChairs);
        return updatedChairs;
    }
    
    const show = (chairs: IChair[]) => {  // решить как показывать локальную версию
        if (chairs.length === 0) {
            const updatedChairs = foo();
            const rows = [];
            for (let i = 1; i < currentRow; i++) {
                rows.push(
                    <Row
                        key={i} 
                        row={i} 
                        chairs={updatedChairs.filter(chair => chair.hall_row === i)} 
                       
                    />
                );
            }
    
            // console.log("hallplane");
            return rows;
        }
        // if (chairs.length === 0 && (hall?.row === 0 || hall?.place === 0)) return;
        // if (chairs.length === 0 && (currentRow !== null && currentPlace !== null)) {
        //     console.log('difference ' + currentRow + ' ' + currentPlace);
        // }



    };
        
    

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
                    {show(chairs)}
                </div>
            </div>
        </>
    );
}

export default HallPlan;

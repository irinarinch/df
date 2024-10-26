import Section from "../components/Section";
import HallsList from "../components/HallsList";
import SelectorsBox from "../components/SelectorsBox";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";

import "../../public/admin/CSS/styles.css";
import "../../public/admin/CSS/normalize.css";
import "../../public/admin/CSS/styles.scss";

import Buttons_group from "../components/Buttons_group";
import HallPlan from "../components/HallPlan";
import Main from "../components/Main";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import Sessions from "../components/Sessions";
import Session from "../components/Session";
import { hallService } from "../services/hall.service";
import { useEffect, useState } from "react";
import { IChair, IHall } from "../types";
import HallCapacitySelectorBox from "../components/HallCapacitySelectorBox";
import { chairService } from "../services/chair.service";

const AdminPage = () => {
    const [halls, setHalls] = useState<IHall[]>([]);
    const [chairs, setChairs] = useState<IChair[]>([]);
    const [currentHall, setCurrentHall] = useState<IHall|null>(null);
    const [currentRow, setCurrentRow] = useState<number|null>(currentHall ? currentHall.row : null);
    const [currentPlace, setCurrentPlace] = useState<number|null>(currentHall ? currentHall.place : null);
    const array = [];

    const fetch = async (string: string = '', id: number = 0) => {
        if (string === 'create') {
            await hallService.createHall({});  
        } else if (string === 'removeHall') {
            await hallService.removeHall(id); 
        } else if (string === 'selectHall') {
            const find = halls.find(hall => hall.id === id);
            if(!find) return;
            console.log(id);
            setCurrentHall(find);
            setCurrentRow(find.row); 
            setCurrentPlace(find.place);
            setChairs(await chairService.getChairsForHall(find.id))          
        } else if (string === 'save') {
            console.log('submit');
            const body = {
                row: currentRow,
                place: currentPlace,
            };
            await hallService.updateHall(body, id);
        }
        
        setHalls(await hallService.getHalls());
        
    }; 

    useEffect(() => {
        fetch();
    }, []);

    const update = (id: number) => {
        const fecthData = async () => {            
            setHalls(await hallService.getHalls());
                       
        };

        fecthData(); 
    }

    const onRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('tyk row ' + +e.target.value);
        setCurrentRow(+e.target.value);
        console.log(currentRow);
    };

    const onPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('tyk place');
        setCurrentPlace(+e.target.value);
        console.log(currentPlace);
    };



    const reset = () => {
        // setCurrentRow(null);
        // setCurrentPlace(null);

        document
        .querySelectorAll(".conf-step__input")
        .forEach((input) => (input.value = ""));

    };


    



    const saveHallConfig = () => {

        // const body = {
        //     row: currentRow,
        //     place: currentPlace,
        // };

        if(!currentRow || !currentPlace) return;
    
        const fetchData = async () => {
            // Получаем список кресел для текущего зала
            const currentChairs = await chairService.getChairsForHall(currentHall.id);
            if(array.length == 0) {
                console.log('array');
            }
            
            const updatedChairs = [...currentChairs]; // Создаём копию исходного состояния
           
            // Обновляем или создаём кресла
            for (let i = 1; i <= currentRow; i++) {
                for (let j = 1; j <= currentPlace; j++) {
                    const chair = updatedChairs.find(chair => chair.hall_row === i && chair.place === j);
                    
                    if (chair) {
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
                        

      
    
                    } else {
                        // Создать кресло
                        const newChair = await chairService.createChair({
                            hall_id: currentHall.id,
                            hall_row: i,
                            place: j,
                            type: "standart", // или другой тип, если требуется
                        });
    
                        // Добавляем новое кресло в локальную копию
                        updatedChairs.push(newChair);

                
                    }
                }
            }
    
            // Удаляем ненужные кресла
            const chairsToDelete = currentChairs.filter(
                (chair) => chair.hall_row > currentRow || chair.place > currentPlace
            );
    
            for (const chair of chairsToDelete) {
                await chairService.removeChair(chair);
            }

    
            // Обновляем состояние единожды после всех операций
            
    
            // Обновляем зал
            await hallService.updateHall(body, currentHall.id);
    
            // setHalls(await hallService.getHalls());
    
            // console.log('submit ' + currentHall.id);
        };
    
        // Вызываем fetchData
        fetchData();

   
    };


    const getChairId = (e: React.MouseEvent) => {
        const types = ['standart', 'vip', 'disabled'];
        const ind = types.findIndex(i => e.target.dataset.type === i);
        console.log(ind);
        e.target.dataset.type = types[(ind + 1)%3];
        e.target.className = `conf-step__chair conf-step__chair_${e.target.dataset.type}`;
        
        if (!array.find(item => (item.row === e.target.dataset.row) && (item.place === e.target.dataset.place))) {
            array.push(e.target.dataset);
        }
        console.log(array);
    };
      
    



    return (
        <>
            <Header />
            <Main>
                <Section title="Управление залами"> 
                    <Paragraph title="Доступные залы:" />
                    <HallsList halls={halls} onClick={async (id: number) => fetch('removeHall', id)} />
                    <Button caption="Создать зал" onClick={async () => fetch('create')} />
                </Section>
                <Section title="Конфигурация залов">
                    <SelectorsBox array={halls} onChange={async (e: React.ChangeEvent<HTMLInputElement>) => fetch('selectHall', +e.target.value)} />
                    <HallCapacitySelectorBox
                        onRowChange={onRowChange}
                        onPlaceChange={onPlaceChange} 
                        currentRow={currentRow} 
                        currentPlace={currentPlace} 
                        hall={currentHall}                       
                    />

                    <HallPlan
                        hall={currentHall} 
                        currentRow={currentRow} 
                        currentPlace={currentPlace}                    
                    ></HallPlan>

                    <Buttons_group onCancel={reset} onSubmit={async () => fetch('save', currentHall?.id)} />
                </Section>
                <Section title="Конфигурация цен">
                <SelectorsBox array={halls} onChange={()=>{}} />
                <Paragraph title="Установите цены для типов кресел:" />
                <div className="conf-step__legend">
                    <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" className="conf-step__input" placeholder="0" />
                    </label>
                    за{" "}
                    <span className="conf-step__chair conf-step__chair_standart"></span>{" "}
                    обычные кресла
                </div>
                <div className="conf-step__legend">
                    <label className="conf-step__label">
                    Цена, рублей
                    <input
                        type="text"
                        className="conf-step__input"
                        placeholder="0"
                        defaultValue="350"
                    />
                    </label>
                    за <span className="conf-step__chair conf-step__chair_vip"></span>{" "}
                    VIP кресла
                </div>
                <Buttons_group />
                </Section>
                <Section title={"Сетка сеансов"}>
                <Paragraph
                    title={<Button caption="Добавить фильм" onClick={() => {}} />}
                />
                <Movies>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </Movies>
                <Sessions>
                    <Session></Session>
                </Sessions>
                </Section>
            </Main>
        </>
    );
};

export default AdminPage;
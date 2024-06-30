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
import Chear from "../components/Chear";
import HallPlan from "../components/HallPlan";
import Row from "../components/Row";
import Main from "../components/Main";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import Sessions from "../components/Sessions";
import Session from "../components/Session";
import { hallService } from "../services/hall.service";
import { ChangeEvent, useEffect, useState } from "react";
import { IHall } from "../types";
import HallCapacitySelectorBox from "../components/HallCapacitySelectorBox";

const AdminPage = () => {
    const [halls, setHalls] = useState<IHall[]>([]);
    const [currentHall, setCurrentHall] = useState<IHall>(halls[0]);
    const [currentRow, setCurrentRow] = useState<number>(0);
const [currentPlace, setCurrentPlace] = useState<number>(0);

    const onChange = (e: any) => { // !!!!!!!!!!!! убрать эни
        const hall = halls.find(i => i.id === +e.target.value);
        if (hall) {
            setCurrentHall(hall);
        }
    }

    const onRowChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setCurrentRow(+e.target.value);
    }

    const onPlaceChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setCurrentPlace(+e.target.value);
    }

    useEffect(() => {
        const fecthData = async () => {
          const data = await hallService.getHalls();
          setHalls(data);
        };
        
        fecthData();

      }, []);
  return (
    <>
      <Header />
      <Main>  
        <Section title="Управление залами" >
            <Paragraph title="Доступные залы:"/>
            <HallsList halls={halls}/>            
            <Button caption="Создать зал" onClick={() => hallService.createHall({})}/>
        </Section>
        <Section title="Конфигурация залов">
            
            <SelectorsBox array={halls} onChange={onChange}/>  
            <HallCapacitySelectorBox onRowChange={onRowChange} onPlaceChange={onPlaceChange}/>     
            
            <Paragraph title="Теперь вы можете указать типы кресел на схеме зала:"/>
            <div className="conf-step__legend">
                <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
                <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
                <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
                <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
            </div> 
            <HallPlan hall={currentHall} editRow={currentRow} editPlace={currentPlace}></HallPlan>
            <Buttons_group/>
        </Section>
        <Section title="Конфигурация цен" >
            <SelectorsBox array={halls} onChange={onChange}/>
            <Paragraph title="Установите цены для типов кресел:"/>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" className="conf-step__input" placeholder="0" />
                </label>
                за <span className="conf-step__chair conf-step__chair_standart"></span> обычные кресла
            </div>  
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" className="conf-step__input" placeholder="0" defaultValue="350"/>
                </label>
                за <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
            </div> 
            <Buttons_group/> 
        </Section>
        <Section title={"Сетка сеансов"}>
            <Paragraph title={<Button caption="Добавить фильм" onClick={()=>{}}/> }/>
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
}

export default AdminPage;
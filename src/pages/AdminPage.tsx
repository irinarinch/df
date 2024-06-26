import Section from "../components/Section";
import List from "../components/List";
import SelectorsBox from "../components/SelectorsBox";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";



import Header from "../components/Header";

import "../../public/admin/CSS/styles.css";
import "../../public/admin/CSS/normalize.css";
import "../../public/admin/CSS/styles.scss";

import Buttons_group from "../components/Buttons_group";
import Chear from "../components/Chear";
import Hall from "../components/Hall";
import Row from "../components/Row";
import Main from "../components/Main";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import Sessions from "../components/Sessions";

const AdminPage = () => {
  return (
    <>
      <Header />
      <Main>  
        <Section title="Управление залами" >
            <Paragraph title="Доступные залы:"/>
            <List />
            <Button caption="Создать зал"/>
        </Section>
        <Section title="Конфигурация залов">
            
            <SelectorsBox />        
            <Paragraph title="Укажите количество рядов и максимальное количество кресел в ряду:"/>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Рядов, шт
                    <input  
                        type="text" 
                        className="conf-step__input" 
                        placeholder="10" 
                    />
                </label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">
                    Мест, шт
                    <input 
                        type="text" 
                        className="conf-step__input" 
                        placeholder="8" 
                    />
                </label>
            </div>
            <Paragraph title="Теперь вы можете указать типы кресел на схеме зала:"/>
            <div className="conf-step__legend">
                <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
                <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
                <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
                <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
            </div> 
            <Hall>
            <Row>
                <Chear type="disabled"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="vip"></Chear>
                <Chear type="vip"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="disabled"></Chear>
            </Row>
            <Row>
                <Chear type="disabled"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="vip"></Chear>
                <Chear type="vip"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="disabled"></Chear>
            </Row>
            <Row>
                <Chear type="disabled"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="vip"></Chear>
                <Chear type="vip"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="standart"></Chear>
                <Chear type="disabled"></Chear>
            </Row>
            </Hall>
            <Buttons_group/>
        </Section>
        <Section title="Конфигурация цен" >
            <SelectorsBox />
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
                    <input type="text" className="conf-step__input" placeholder="0" value="350"/>
                </label>
                за <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
            </div> 
            <Buttons_group/> 
        </Section>
        <Section title={"Сетка сеансов"}>
            <Paragraph title={<Button caption="Добавить фильм"/>}/>
            <Movies>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
            </Movies>
            <Sessions>
                
            </Sessions>
        </Section>
      </Main>
    </>
  );
}

export default AdminPage;
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
import { ChangeEvent, useEffect, useState } from "react";
import { IChair, IHall } from "../types";
import HallCapacitySelectorBox from "../components/HallCapacitySelectorBox";
import { chairService } from "../services/chair.service";

const AdminPage = () => {
    const [halls, setHalls] = useState<IHall[]>([]);
    const [chairs, setChairs] = useState<IChair[]>([]);
    const [currentHall, setCurrentHall] = useState<IHall>(halls[0]);
    const [currentRow, setCurrentRow] = useState<number>(0);
    const [currentPlace, setCurrentPlace] = useState<number>(0);

    useEffect(() => {
        const fecthData = async () => {
            setHalls(await hallService.getHalls());
            setChairs(await chairService.getChairs());
        };

        fecthData();
    }, []);

    const createHall = () => {
        const fecthData = async () => {
            await hallService.createHall({});

            setHalls(await hallService.getHalls());
            setChairs(await chairService.getChairs());
        };

        fecthData();
    };

    const removeHall = (id: number) => {
        const fecthData = async () => {
            await hallService.deleteHall(id);

            setHalls(await hallService.getHalls());
            setChairs(await chairService.getChairs());
        };

        fecthData();        
    }

    const selectHall = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hall = halls.find((i) => i.id == +e.target.value);
        if (!hall) return;

        setCurrentHall(hall);        
        reset();
    };

  const onRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRow(+e.target.value);
  };

  const onPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPlace(+e.target.value);
  };



  const reset = () => {
    setCurrentRow(0);
    setCurrentPlace(0);

    document
      .querySelectorAll(".conf-step__input")
      .forEach((input) => (input.value = ""));
  };

  const onSubmit = () => {
    console.log("submit");
    const body = {
      row: currentRow,
      place: currentPlace,
    };

    const fecthData = async () => {
      const data = await hallService.updateHall(body, currentHall.id);
      setCurrentHall(data);

      for (let i = 1; i <= currentRow; i++) {
        for (let j = 1; j <= currentPlace; j++) {
          chairService.createChair({
            hall_id: currentHall.id,
            hall_row: i,
            place: j,
          });
        }
      }

      reset();
    };

    fecthData();
  };



    return (
        <>
            <Header />
            <Main>
                <Section title="Управление залами">
                    <Paragraph title="Доступные залы:" />
                    <HallsList halls={halls} onClick={removeHall} />
                    <Button caption="Создать зал" onClick={createHall} />
                </Section>
                <Section title="Конфигурация залов">
                    <SelectorsBox array={halls} onChange={selectHall} />
                    <HallCapacitySelectorBox
                        onRowChange={onRowChange}
                        onPlaceChange={onPlaceChange}
                    />

                    <HallPlan
                        hall={currentHall}
                        editRow={currentRow}
                        editPlace={currentPlace}
                        chairs={chairs}
                    ></HallPlan>

                    <Buttons_group onCancel={reset} onSubmit={onSubmit} />
                </Section>
                <Section title="Конфигурация цен">
                <SelectorsBox array={halls} onChange={selectHall} />
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
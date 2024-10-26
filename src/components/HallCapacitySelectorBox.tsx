import React from "react";
import Paragraph from "./Paragraph";
import { IHall } from "../types";

interface IProps {
    onRowChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPlaceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currentRow: number | null;
    currentPlace: number | null;
    hall: IHall | null;
}

const HallCapacitySelectorBox = ({ onRowChange, onPlaceChange, currentRow, currentPlace, hall }: IProps) => {
    if(!hall) return;
    const row = currentRow ? currentRow : hall.row;
    const place = currentPlace ? currentPlace : hall.place;

    return (
        <>
            <Paragraph title="Укажите количество рядов и максимальное количество кресел в ряду:" />
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Рядов, шт
                    <input
                        type="number"
                        min={1}
                        max={10}
                        className="conf-step__input"
                        placeholder="10"
                        value={row}
                        onInput={onRowChange}
                    />
                </label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">
                    Мест, шт
                    <input
                        type="number"
                        min={1}
                        max={8}
                        className="conf-step__input"
                        placeholder="8"
                        value={place}
                        onInput={onPlaceChange}
                    />
                </label>
            </div>
        </>
    );
};

export default HallCapacitySelectorBox;
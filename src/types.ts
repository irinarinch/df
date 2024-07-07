import { Dispatch, SetStateAction } from "react";

export interface IProps {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
}

export interface IHall {
    "id": number,
    "row": number,
    "place": number,
    "checked": boolean,
    "created_at": string,
    "updated_at": string,
}

export interface IChair {
    "id": number,
    'type': string,
    'active': boolean,       
    'free': boolean, 
    'hall_id': number,
    'hall_row': number,
    'price': number,
    "created_at": string,
    "updated_at": string, 
}

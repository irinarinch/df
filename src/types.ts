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

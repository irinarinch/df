import { IProps } from "./types";


export function Details({title, setTitle}: IProps) {
    return (
        <>
            <h1>{title}</h1>
            <button onClick={() => setTitle('Это диплом!')}>Show title</button>
        </>
    );
}
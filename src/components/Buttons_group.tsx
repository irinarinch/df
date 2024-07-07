interface IButtonsProps {
    onCancel: ()=>void;
    onSubmit: ()=>void;
}
const Buttons_group = ({onCancel, onSubmit}: IButtonsProps) => {
    return (
        <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={onCancel}>
                Отмена
            </button>
            <input 
                type="submit" 
                value="Сохранить" 
                className="conf-step__button conf-step__button-accent" 
                onClick={onSubmit}
            />
        </fieldset> 
    )
}

export default Buttons_group;

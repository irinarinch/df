import Paragraph from "./Paragraph";


const SelectorsBox = () => {
  return (
    <>
        <Paragraph title="Выберите зал для конфигурации:"/>
        <ul className="conf-step__selectors-box">
            <li>
                <input 
                    type="radio" 
                    className="conf-step__radio" 
                    name="chairs-hall" 
                    value="Зал 1" 
                    checked 
                />
                <span className="conf-step__selector">Зал 1</span>
            </li>
            <li>
                <input 
                    type="radio" 
                    className="conf-step__radio" 
                    name="chairs-hall" 
                    value="Зал 2"
                />
                <span className="conf-step__selector">Зал 2</span>
            </li>
        </ul>
    </>

  );
}

export default SelectorsBox
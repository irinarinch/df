

interface IProps {
    title: string,
    children: JSX.Element | JSX.Element[],
}
const Section = (props: IProps) => {
  return (
    <section className="conf-step">
        <header className="conf-step__header conf-step__header_opened">
            <h2 className="conf-step__title">{props.title}</h2>
        </header>
        <div className="conf-step__wrapper">
            {props.children}
        </div>
    </section>
  );
}

export default Section




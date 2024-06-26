interface IHallProps {
    children: JSX.Element | JSX.Element[],
}
const Hall = (props: IHallProps) => {
  return (
    <div className="conf-step__hall">
        <div className="conf-step__hall-wrapper">
            {props.children}
        </div>
    </div>
  )
}

export default Hall
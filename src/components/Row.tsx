interface IRowProps {
    children: JSX.Element | JSX.Element[],
}

const Row = (props: IRowProps) => {
  return (
    <div className="conf-step__row">
        {props.children}
    </div>
  )
}

export default Row;

interface IProps {
    title: string | JSX.Element,
}
const Paragraph = (props: IProps) => {
  return (
    <p className="conf-step__paragraph">{props.title}</p>
  )
}

export default Paragraph
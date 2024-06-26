interface IChearProps {
    type: 'disabled' | 'standart' | 'vip',
}

function Chear(props: IChearProps) {
  return (
    <span className={`conf-step__chair conf-step__chair_${props.type}`}></span>
  )
}

export default Chear
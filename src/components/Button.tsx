interface IButtonProps {
    caption: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button className="conf-step__button conf-step__button-accent">{props.caption}</button>
  )
}

export default Button
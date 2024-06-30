interface IButtonProps {
    caption: string;
    onClick: ()=>void;
}

const Button = ({caption, onClick}: IButtonProps) => {
  return (
    <button 
      className="conf-step__button conf-step__button-accent" 
      onClick={onClick}
    >
      {caption}
    </button>
  )
}

export default Button
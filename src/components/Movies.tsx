import { PropsWithChildren } from "react"


const Movies = (props: PropsWithChildren) => {
  return (
    <div className="conf-step__movies">{props.children}</div>
  )
}

export default Movies
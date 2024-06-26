import { PropsWithChildren } from 'react'

const Sessions = (props: PropsWithChildren) => {
  return (
    <div className="conf-step__seances">{props.children}</div>
  )
}

export default Sessions
import { PropsWithChildren } from "react"

const Main = (props: PropsWithChildren) => {
  return (
    <main className="conf-steps">
        {props.children}
    </main>
  )
}

export default Main
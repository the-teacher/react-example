import './index.css'
import * as React from "react"

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default AppLayout

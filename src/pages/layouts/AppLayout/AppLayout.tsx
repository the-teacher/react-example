import './index.css'
import * as React from "react"
import NavBar from 'src/components/NavBar'

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default AppLayout

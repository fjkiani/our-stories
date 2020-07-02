import React from "react"
import "./layout.css"
import NavBar from "./NavBar"


const layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <main>{children}</main>
    </>
  )
}

export default layout

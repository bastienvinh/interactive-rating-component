import React from "react"
import Styles from "./Button.module.scss"

interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {  
  return <button onClick={() => onClick?.()} className={Styles.Button}>
    {children}
  </button>
}

export default Button

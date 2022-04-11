import React from "react"
import Styles from "./Circle.module.scss"
import classnames from "classnames"

import _ from "lodash"

export enum CircleButtonType {
  button = "button",
  none = "none"
}

interface CircleButtonProps {
  color?: string
  children?: React.ReactNode
  type?: CircleButtonType
  onClick?: () => void
  active?: boolean
}

const CircleButton: React.FC<CircleButtonProps> = ({ children, type, onClick, active }) => {
  return <div 
    onClick={() => _.isEqual(type, CircleButtonType.button) && onClick?.()} 
    className={classnames(Styles.Circle, { [Styles.Button]: type === CircleButtonType.button, [Styles.active]: !!active })}
  >
    {children}
  </div>
}

export default CircleButton
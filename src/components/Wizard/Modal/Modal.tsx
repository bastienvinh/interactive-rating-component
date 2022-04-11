import classNames from "classnames"
import Styles from "./Modal.module.scss"

interface ModalProps {
  children?: React.ReactNode
  isOpened?: boolean
}

const Modal: React.FC<ModalProps> = ({ children, isOpened }) => {
  return <div className={classNames(Styles.Modal, { [Styles.Opened]: isOpened })}>
    {children}
  </div>
}

export default Modal

import React from "react"
import Styles from "./DisplayWizard.module.scss"
import { DisplayWizardSlideProps } from "./DisplayWizardSlide"

interface DisplayWizardProps {
  children?: React.ReactNode
  displayedId?: string
}

const DisplayWizard: React.FC<DisplayWizardProps> = ({ children, displayedId }) => {

  const slides = React.Children.toArray(children) as Array<{ props: DisplayWizardSlideProps }>
  const currentSlide = slides.find(slide => slide.props.id === displayedId) ?? slides.at(0)

  return <div className={Styles.Slide}>
    {currentSlide && currentSlide.props.children}
  </div>
}

export default DisplayWizard

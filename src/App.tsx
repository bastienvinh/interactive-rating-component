import React from "react"

import Styles from "./App.module.scss"
import Wizard from "./components/Wizard/Wizard"

const App: React.FC = () => {
  return <div className={Styles.middle}>
    <Wizard />
  </div>
}

export default App

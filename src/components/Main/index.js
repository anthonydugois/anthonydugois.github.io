import React from "react"
import Svg from "react-svg-inline"
import styles from "./index.css"
import icon from "../svg/logo-icon.svg"

const Main = () => (
  <div className={ styles.main }>
    <Svg
      className={ styles.svg }
      svg={ icon } />

    <div className={ styles.brand }>
      <h1 className={ styles.name }>
        Anthony Dugois
      </h1>
      <div className={ styles.lead }>
        Creative Developer
      </div>
    </div>
  </div>
)

export default Main

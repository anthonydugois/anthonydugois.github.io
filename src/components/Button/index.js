import React, { PropTypes } from "react"
import styles from "./index.css"

const Button = ({
  href,
  children,
}) => (
  <a
    className={ styles.button }
    href={ href }>
    { children }
  </a>
)

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Button

import React, { PropTypes } from "react"
import Svg from "react-svg-inline"
import { Link } from "phenomic"
import logo from "../svg/logo-icon.svg"
import styles from "./index.css"

const Header = () => (
  <header className={ styles.header }>
    <div className={ styles.container }>
      <Link to="/" className={ styles.logo }>
        <Svg svg={ logo } className={ styles.svg } />
      </Link>

      {/*<nav className={ styles.nav }>
        <Link to="" className={ styles.link }>
          Projects
        </Link>
        <Link to="" className={ styles.link }>
          About
        </Link>
        <Link to="" className={ styles.link }>
          Blog
        </Link>
      </nav>*/}
    </div>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header

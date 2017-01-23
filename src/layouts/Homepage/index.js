import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import { BodyContainer } from "phenomic"
import Slider from "../../components/Slider"
import Main from "../../components/Main"
import Projects from "../../components/Projects"
import styles from './index.css'

const Homepage = ({
  isLoading,
  head,
  body,
}) => (
  <div className={ styles.homepage }>
    <Helmet title={ head.title } />

    <Slider />
    <Main />
    <Projects />

    <div className={ styles.about }>
      <div className={ styles.content }>
        <BodyContainer>
          { !isLoading && body }
        </BodyContainer>
      </div>
    </div>
  </div>
)

Homepage.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Homepage

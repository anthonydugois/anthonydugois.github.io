import React, { PropTypes } from "react"
import Button from "../Button"
import styles from "./index.css"

const Project = ({
  title,
  description,
  image,
  github,
  demo,
  order,
}) => (
  <div
    id={ `project_${ order }` }
    className={ styles.project }>
    <div className={ styles.container }>
      <div className={ styles.media }>
        <img
          className={ styles.image }
          src={ `assets/${ image }` }
          alt={ `Image ${ title }` } />
      </div>

      <div className={ styles.content }>
        <h2 className={ styles.title }>
          { title }
        </h2>
        <p className={ styles.description }>
          { description }
        </p>
        <div className={ styles.actions }>
          { demo && (
            <Button href={ demo }>
              Live demo
            </Button>
          ) }

          { github && (
            <Button href={ github }>
              See on GitHub
            </Button>
          ) }
        </div>
      </div>
    </div>
  </div>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
  order: PropTypes.number,
}

export default Project

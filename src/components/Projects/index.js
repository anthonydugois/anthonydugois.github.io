import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Project from "../Project"
import styles from "./index.css"

const Projects = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filter: { layout: 'Project' },
    sort: 'order',
  }).slice(0, props.limit)

  return (
    <div className={ styles.projects }>
      { projects.map((project) => (
        <Project
          key={ project.__url }
          { ...project } />
      )) }
    </div>
  )
}

Projects.propTypes = {
  limit: PropTypes.number.isRequired,
}

Projects.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Projects.defaultProps = {
  limit: 6,
}

export default Projects

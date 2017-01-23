import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import styles from "./index.css"

const Slider = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filter: { layout: 'Project' },
    sort: 'order',
  }).slice(0, props.limit)

  return (
    <div className={ styles.slider }>
      <div className={ styles.container }>
        <div className={ styles.links }>
          { projects.map((project) => (
            <a
              key={ project.__url }
              href={ `#project_${ project.order }` }
              className={ styles.link }>
              <div className={ styles.number }>
                <div className={ styles.inner }>
                  { ('0' + project.order).slice(-2) }
                </div>
              </div>
              <div className={ styles.preview }>
                <div className={ styles.title }>
                  { project.title }
                </div>
                <div className={ styles.desc }>
                  { project.description }
                </div>
              </div>
            </a>
          )) }
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  limit: PropTypes.number.isRequired,
}

Slider.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Slider.defaultProps = {
  limit: 6,
}

export default Slider

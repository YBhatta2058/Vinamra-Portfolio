import React from 'react'
import "./Projects.scss"
import ProjectInfo from './projectInfo'
import Cards from './Cards'

const Projects = () => {
  return (
    <>
    <h1 className = "projectsTitle">Projects</h1>
    <div className = "projectsContainer">
      {ProjectInfo.map(project => (
        <Cards data = {project} />
        ))}
    </div>
        </>
  )
}

export default Projects
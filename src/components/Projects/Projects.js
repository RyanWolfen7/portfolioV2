import React from 'react'
import { ProjectsContainer, ProjectContainer } from '../../styles/ProjectStyles'

const ProjectsView = props => {
    const { windowSize } = props

    const renderProjects = () => {

        return (
            <ProjectContainer>
            </ProjectContainer>
        )
    }

    return (
        <ProjectsContainer windowSize={windowSize}>
            {renderProjects()}
        </ProjectsContainer>
    )
}

export default ProjectsView
import React from 'react'
import { TechSkillsCard, SkillsContainer } from '../../styles/SkillsViewStyles'
import techIcons from '../../assets/techIcons/index'

const TechSkills = props => {
    const { windowSize } = props

    const renderTechSkills = () => {
        return techIcons.map(skill => {
            return (
                <TechSkillsCard> 
                    <img 
                        src={skill}
                    />
                </TechSkillsCard>
            )
        })
    }

    return <SkillsContainer windowSize={windowSize}>{renderTechSkills()} </SkillsContainer>

}

export default TechSkills
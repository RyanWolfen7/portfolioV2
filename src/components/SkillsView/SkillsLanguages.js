import React from 'react'
import { SkillsCard, SkillsContainer } from '../../styles/SkillsViewStyles'
import languageIcons from '../../assets/languageIcons/index'

const LanguageSkills = props => {
    const { windowSize } = props

    const renderTechSkills = () => {
        return languageIcons.map(skill => {
            return (
                <SkillsCard> 
                    <img 
                        src={skill}
                    />
                </SkillsCard>
            )
        })
    }

    return <SkillsContainer languages windowSize={windowSize}>{renderTechSkills()} </SkillsContainer>
}

export default LanguageSkills
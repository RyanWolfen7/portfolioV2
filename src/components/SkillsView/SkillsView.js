import React, { useState } from 'react'
import SkillFooter from './SkillsFooter'
import { SkillsContainer } from '../../styles/SkillsViewStyles'

const SkillsView = props => {
    const [selectedSkill, setSelectedSkill] = useState({ tech: true, languages: false, testimonials: false, other: false})
    const { windowSize } = props

    const handleSelectedSkill = story => {
        const resetSelected = {tech: false, languages: false, testimonials: false, other: false}
        setSelectedSkill({...resetSelected, ...{ [story]: true }})
    }

    return (<>
        <SkillsContainer>
            
        </SkillsContainer>
        <SkillFooter
            selectedSkill={selectedSkill}
            handleSelectedSkill={handleSelectedSkill}
            windowSize={windowSize}
        />
    </>)
}

export default SkillsView
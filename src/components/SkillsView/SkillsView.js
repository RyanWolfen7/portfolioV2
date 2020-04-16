import React, { useState } from 'react'
import SkillHeader from './SkillsHeader'

const SkillsView = props => {
    const [selectedSkill, setSelectedSkill] = useState({ tech: true, languages: false, testimonials: false, other: false})
    const { windowSize } = props

    const handleSelectedSkill = story => {
        const resetSelected = {tech: false, languages: false, testimonials: false, other: false}
        setSelectedSkill({...resetSelected, ...{ [story]: true }})
    }

    return (<>
        <SkillHeader
            selectedSkill={selectedSkill}
            handleSelectedSkill={handleSelectedSkill}
            windowSize={windowSize}
        />
    </>)
}

export default SkillsView
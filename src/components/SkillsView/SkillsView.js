import React, { useState } from 'react'
import SkillFooter from './SkillsFooter'
import TechSkills from './TechSkills'
import LanguageSkills from './SkillsLanguages'
import Testimonials from './SkillsTestimonials'

const SkillsView = props => {
    const [selectedSkill, setSelectedSkill] = useState({ tech: false, languages: false, testimonials: true, other: false})
    const { windowSize } = props

    const handleSelectedSkill = story => {
        const resetSelected = {tech: false, languages: false, testimonials: false, other: false}
        setSelectedSkill({...resetSelected, ...{ [story]: true }})
    }

    return (<>
            {selectedSkill.tech && <TechSkills windowSize={windowSize}/>}
            {selectedSkill.languages && <LanguageSkills windowSize={windowSize}/>}
            {selectedSkill.testimonials && <Testimonials windowSize={windowSize}/>}
        <SkillFooter
            selectedSkill={selectedSkill}
            handleSelectedSkill={handleSelectedSkill}
            windowSize={windowSize}
        />
    </>)
}

export default SkillsView
import React from 'react'
import { SkillViewHeader, SkillTab } from '../../styles/SkillsViewStyles'
import { capitalizeFirstLetter } from '../../helpers/index'

const SkillHeader = props => {
    const {selectedSkill, handleSelectedSkill } = props

    const handleSelect = event => {
        handleSelectedSkill(event.target.id)
    }

    const renderSkillButtons = () => {
        return Object.keys(selectedSkill).map( skill => {
            return (
            <SkillTab
                id={skill}
                key={skill}
                selected={selectedSkill[skill]}
                onClick={event => handleSelect(event)}
            >
                { capitalizeFirstLetter(skill) }
            </SkillTab>)
        })
    }

    return<SkillViewHeader> { renderSkillButtons() } </SkillViewHeader>
}

export default SkillHeader
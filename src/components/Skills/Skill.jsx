import React from 'react'
import stlyes from './skill.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from 'react-icons/fa6'

function Skill() {
    return (
        <div className={stlyes.skills_con}>
            <h3 className={stlyes.skills_title}>My Skill Set</h3>
            <ul className={stlyes.skills_list}>
                <li><FaSquareJs /></li>
                <li><FaReact /></li>
                <li><FaSass /></li>
                <li><FaGitAlt /></li>
                <li><FaNode /></li>
            </ul>
        </div>
    )
}

export default Skill

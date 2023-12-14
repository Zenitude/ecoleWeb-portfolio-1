import { useState } from "react";
import { SkillProps } from "../../utils/types/SkillProps";
import { SkillContainer } from "./Skill.style";

export default function Skill({skill, progress}: SkillProps) {
    const [ colorProgress ] = useState(() => {
        let colorBar;
    
        if(progress > 39 && progress < 70) {
            colorBar = "rgba(0,0,255,1)";
        } else if(progress > 69 && progress < 80) {
            colorBar = "rgba(243,237,146,1)";
        } else if(progress > 79 && progress < 101) {
            colorBar = "rgba(167,146,243,1)";
        } else {
            colorBar = "rgba(148,0,0,1)";
        }
        return colorBar;
    })

    return (
        <SkillContainer color={colorProgress} >
            <h3 data-aos="zoom-in" data-aos-duration="1500">{skill}</h3>
            <p data-aos="zoom-in" data-aos-duration="2000">{progress}%</p>
            <progress max="100" value={progress} data-aos="zoom-in" data-aos-duration="3000"></progress>
        </SkillContainer>
    )
}

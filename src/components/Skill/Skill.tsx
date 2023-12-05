import { SkillProps } from "../../utils/types/SkillProps";
import { SkillContainer } from "./Skill.style";

export default function Skill({skill, progress}: SkillProps) {
    return (
        <SkillContainer>
            <h3>{skill}</h3>
            <p>{progress}%</p>
            <progress max="100" value={progress}></progress>
        </SkillContainer>
    )
}

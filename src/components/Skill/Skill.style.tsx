import styled from "styled-components";
import { SkillStyle } from "../../utils/types/SkillProps";

export const SkillContainer = styled.article<SkillStyle>`
    progress {
        border: 1px solid white;
        border-radius: 15px;
        overflow: hidden;

        &::-webkit-progress-value {
            background-color: ${({color}) => color ? color : "#00f" };
        }

        &::-webkit-progress-bar {
            background-color: #c5c1c1;
        }
    }
`;
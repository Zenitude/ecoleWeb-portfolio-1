import styled from "styled-components";
import { SkillProps } from "../../utils/types/SkillProps";

function colorProgress(progress: number): string{
    let colorBar;
    console.log(progress)
    
    if(progress >= 40 && progress < 70) {
        colorBar = "rgba(0,0,255,1)";
    } else if(progress > 69 && progress < 80) {
        colorBar = "rgba(243,237,146,1)";
    } else if(progress > 79 && progress < 101) {
        colorBar = "rgba(167,146,243,1)";
    } else {
        colorBar = "rgba(148,0,0,1)";
    }
    return colorBar;
}

export const SkillContainer = styled.article<SkillProps>`
    progress {
        border: 1px solid white;
        border-radius: 15px;
        overflow: hidden;

        &::-webkit-progress-value {
            background-color: ${({progress}) =>{
                if(progress > 39 ) {
                    return "rgba(0,0,255,1)";
                } else if(progress > 69) {
                    return  "rgba(243,237,146,1)";
                } else if(progress > 79) {
                    return  "rgba(167,146,243,1)";
                } 
                /*else {
                    return  "rgba(148,0,0,1)";
                }*/
            }};
        }

        &::-webkit-progress-bar {
            background-color: #c5c1c1;
        }
    }
`;

/*

*/
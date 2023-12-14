import styled from "styled-components";
import { CardStyle } from "../../utils/types/CardProps";

export const CardContainer = styled.div<CardStyle>`
    article {
        &::before {
            background-color: ${({color}) => color ? `${color}` : "#00f"};
        }
    }
`;
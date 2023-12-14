import styled from "styled-components";
import { LinkProps } from "../../utils/types/LinkProps";

export const LinkContainer = styled.a<LinkProps>`
    background: ${({apparence}) => apparence.outline ? "#f1f1f1" : `${apparence.color}`};
    color: ${({apparence}) => apparence.outline ? `${apparence!.color}` : "#fff"};
`;
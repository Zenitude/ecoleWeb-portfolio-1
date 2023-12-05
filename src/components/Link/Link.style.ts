import styled from "styled-components";
import { LinkProps } from "../../utils/types/LinkProps";

export const LinkContainer = styled.a<LinkProps>`
    background: ${({apparence}) => apparence!.outline ? "transparent" : `${apparence!.color}`};
    color: ${({apparence}) => apparence!.outline ? `${apparence!.color}` : "#fff"};
`;
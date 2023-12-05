import { LinkProps } from "../../utils/types/LinkProps";
import { LinkContainer } from "./Link.style";

export default function Link({href, srcImg, altImg, txt, apparence}: LinkProps) {
  return (
    <LinkContainer href={href} apparence={apparence}>
      {srcImg ? (<img src={srcImg} alt={altImg} />) : txt}
    </LinkContainer>
  )
}

import { CardProps } from "../../utils/types/CardProps";
import { CardContainer } from "./Card.style";

export default function Card({type, srcImg, title, time, description, link, color}: CardProps) {
  return (
    <CardContainer className={type === "port" ? "project" : "experience"} color={color ? color : ""} data-aos="zoom-in-up">
        {type !== "port" && (<div><img src={srcImg} alt={`Expérience chez ${title}`} /></div>)}
        <article className="card">
          {type === "port" && (<img src={srcImg} alt={`aperçu du projet ${title}`} />)}
          <div className="desc">
            <h3>{type === "port" ? title : `${title}, ${(time && time.end) ? `${time.start}-${time.end}` : time!.start}`}</h3>
            <p>{description}</p>
            {type === "port" && (<a href={link}>Découvrez le projet</a>) }
          </div>
        </article>
    </CardContainer>
  )
}

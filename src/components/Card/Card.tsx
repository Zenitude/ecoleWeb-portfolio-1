import { CardProps } from "../../utils/types/CardProps";

export default function Card({type, srcImg, title, time, description, link}: CardProps) {
  return (
    <div className={type === "port" ? "project" : "experience"}>
        {type !== "port" && (<div><img src={srcImg} alt={`Expérience chez ${title}`} /></div>)}
        <article className="card">
          {type === "port" && (<img src={srcImg} alt={`aperçu du projet ${title}`} />)}
          <div className="desc">
            <h3>{type === "port" ? title : `${title}, ${(time && time.end) ? `${time.start}-${time.end}` : time!.start}`}</h3>
            <p>{description}</p>
            {type === "port" && (<a href={link}>Découvrez le projet</a>) }
          </div>
        </article>
    </div>
  )
}

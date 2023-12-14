import { HomeContainer } from "./Home.style";
import { Card, Field, Link, Skill} from "../Components";
import { github, linkedin, twitter, arrowDown, plane } from "../../assets";
import { projects } from "../../utils/datas/projects";
import { skills } from "../../utils/datas/skills";
import { experiences } from "../../utils/datas/experiences";
import Typewriter from "typewriter-effect";

export default function Home() {

  return (
    <HomeContainer>
      <section id="home">
        <h1 data-aos="fade-down">Bienvenue sur mon portfolio</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString(`Moi c'est Lorem Ipsum, <strong>Développeur</strong> <span class="language-1">Full Stack</span> !`)
            .pauseFor(1000)
            .deleteChars(12)
            .typeString(`<span class="language-2">CSS</span> !`)
            .pauseFor(1000)
            .deleteChars(5)
            .typeString(`<span class="language-3">PHP</span> !`)
            .pauseFor(1000)
            .deleteChars(5)
            .typeString(`<span class="language-4">React</span> !`)
            .pauseFor(1000)
            .deleteChars(7)
            .typeString(`<span class="language-5">JavaScript</span> !`)
            .pauseFor(1000)
            .start();
          }}
        />

        <div className="links" data-aos="fade-down">
          <Link href={"#port"} txt={"Portfolio"} apparence={{outline:false, color: "#000"}}/>
          <Link href={"#exp"} txt={"Expériences"} apparence={{outline:true, color: "#000"}}/>
        </div>
        <div className="networks" data-aos="fade-down">
          <Link href={"/github"} srcImg={github} altImg={"Profil Github"} apparence={{outline: false, color: "#333" }} />
          <Link href={"/linkedin"} srcImg={linkedin} altImg={"Profil Linkedin"} apparence={{outline: true, color: "#333"}} />
          <Link href={"/twitter"} srcImg={twitter} altImg={"Profil Twitter"} apparence={{outline: false, color: "#333"}} />
        </div>
        <Link href={"#pres"} srcImg={arrowDown} apparence={{outline: false, color: "#333"}} />
      </section>

      <section id="pres">
          <h2 data-aos="fade-down">Lorem ipsum dolor sit amet.</h2>
          <article data-aos="fade-down" data-aos-delay="500">
            <h3>Laborum cumque aliquid ut pariatur, natus maxime.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos quisquam rerum aliquam quasi vitae nisi expedita debitis cupiditate asperiores optio eveniet labore, vel beatae!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere illum ullam exercitationem praesentium veniam?</p>
          </article>
          <aside>
            <ol>
              <li data-aos="zoom-in" data-aos-delay="300"><span>1.</span> UX Design expert</li>
              <li data-aos="zoom-in" data-aos-delay="600"><span>2.</span> Spécialiste UI</li>
              <li data-aos="zoom-in" data-aos-delay="900"><span>3.</span> Développeur Back-end</li>
              <li data-aos="zoom-in" data-aos-delay="1200"><span>4.</span> Développeur Front-End</li>
              <li data-aos="zoom-in" data-aos-delay="1500"><span>5.</span> Développeur Full-Stack</li>
            </ol>
          </aside>
      </section>

      <section id="port">
        <h2 data-aos="fade-down">Mon Portfolio</h2>
        <div className="projects">
          {
            projects.map((project, index) => 
              <Card 
              key={`${index}-${project.title.replace(' ', '_')}`}
              type="port" 
              srcImg={project.srcImg} 
              title={project.title} 
              description={project.description} 
              link={project.link}
              />
              )
            }
        </div>
      </section>

      <section id="skills">
        <h2 data-aos="fade-down">Mes compétences</h2>
        <div className="skills">
          {
            skills.map((skill, index) => 
              <Skill 
                key={`${index}-${skill.skillName.replace(' ', '-')}`} 
                skill={skill.skillName} 
                progress={skill.ratio} 
              />
            )
          }
        </div>
      </section>

      <section id="exp">
        <h2>Mes expériences</h2>
        <div className="experiences">
          <div className="bar" data-aos="zoom-in-up"></div>
          <div className="exp">
            {
              experiences.map((exp, index) =>
                <Card
                  key={`${index}-${exp.company}`}
                  type="exp"
                  srcImg={exp.srcImg}
                  title={exp.company}
                  time={{start: exp.dates.start, end: exp.dates.end}}
                  description={exp.desc}
                  color={exp.color}
                />
              )
            }
          </div>
          <div className="plane">
            <img src={plane} alt="" />
          </div>
        </div>
      </section>

      <div id="banner">
        <strong>752 tasses de café</strong>
        <strong>86 projets</strong>
        <strong>38 clients</strong>
      </div>

      <section id="contact">
        <h2><span>Rentrons</span> en Contact</h2>
        <form>
          <Field type={"text"} id={"firstname"} label={"Prénom"} />
          <Field type={"text"} id={"lastname"} label={"Nom"} />
          <Field type={"area"} id={"message"} holder={"Votre message"}/>
          <button>Envoyer</button>
        </form>
      </section>
    </HomeContainer>
  )
}

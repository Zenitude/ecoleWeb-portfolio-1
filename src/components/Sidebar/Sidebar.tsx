import { useState } from "react";
import { boss, contact } from "../../assets";

export default function Sidebar() {
    const [toggle, setToggle ] = useState(false);
    const displayMenu = () => {
        setToggle(!toggle);
    }

    return (
        <div className={toggle ? "sidebar active" : "sidebar"} data-aos="fade-right">
            <button className={toggle ? "menu active" : "menu"} onClick={displayMenu}>
                <div className="row"></div>
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#home">
                            <img src={boss} alt="" className='logo'/>
                        </a>
                    </li>
                    <li className="home"><a href="#home">Accueil</a></li>
                    <li><a href="#pres">Présentation</a></li>
                    <li><a href="#port">Portfolio</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li className="contact"><a href="#contact">Contact</a></li>
                    <li>
                        <a href="#contact">
                            <img src={contact} alt="" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

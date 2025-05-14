import Style from './CSS/Navbar1.module.css'
import logo from '../../public/images/ENACTUS.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour alterner l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={Style.main}>
            <nav className={Style.nav}>
                <div className={Style.logo}>
                    <img src={logo} alt="" className={Style.img} />
                </div>
                <ul
                    className={Style.ul}
                    id="menuList"
                    style={{ maxHeight: isMenuOpen ? '300px' : '0px' }} // Contrôle la hauteur en fonction de l'état
                >
                    <li className={Style.li}><Link to="/" className={Style.a}>Accueil</Link></li>
                    <li className={Style.li}><Link to="/about" className={Style.a}>A propos</Link></li>
                    <li className={Style.li}><Link to="/project" className={Style.a}>Projets</Link></li>
                    <li className={Style.li}><Link to="/event" className={Style.a}>Evenement</Link></li>
                    <li className={Style.li}><Link to="/join" className={Style.a}>Rejoindre</Link></li>
                </ul>
                <div className={Style.menu_icon}>
                    <div className={Style.icon} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    );
}

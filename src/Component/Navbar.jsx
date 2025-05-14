import React, { useState } from "react"
import Style from './CSS/Navbar.module.css'

export default function Navbar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <div className={Style.main}>
            <div className={Style.nav}>
                <ul className={Style.links}>
                    <li className={Style.li}><a href="#" className={Style.link}>Aceuill</a></li>
                    <li className={Style.li}><a href="#" className={Style.link}>About us</a></li>
                    <li className={Style.li}><a href="#" className={Style.link}>Project</a></li>
                    <li className={Style.li}><a href="#" className={Style.link}>Event</a></li>
                    <li className={Style.li}><a href="#" className={Style.link}>Contact</a></li>
                    <li className={Style.li}><a href="#" className={Style.link}>Login</a></li>
                    <li className={Style.li} onClick={(e) => { e.preventDefault();setIsSidebarOpen(true);}}>
                        <a href="" className={Style.link}><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>

                </ul>
                <ul className={Style.sidebar} style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
                    <li className={Style.sidelix} onClick={(e) => {e.preventDefault();setIsSidebarOpen(false);}}>
                        <a href="#" className={Style.sidelink}><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li className={Style.sideli}><a href="#" className={Style.sidelink}>Aceuill</a></li>
                    <li className={Style.sideli}><a href="#" className={Style.sidelink}>About us</a></li>
                    <li className={Style.sideli}><a href="#" className={Style.sidelink}>Project</a></li>
                    <li className={Style.sideli}><a href="#" className={Style.sidelink}>Event</a></li>
                    <li className={Style.sideli}><a href="#" className={Style.sidelink}>Contact</a></li>
                    <li className={Style.sideli}><a href="#" className={Style.sidelink}>Login</a></li>
                </ul>
            </div>



<li className={Style.li}><a href="" className={Style.a}>Home</a></li>
                    <li className={Style.li}><a href="" className={Style.a}>About</a></li>
                    <li className={Style.li}><a href="" className={Style.a}>Projet</a></li>
                    <li className={Style.li}><a href="" className={Style.a}>Event</a></li>
                    <li className={Style.li}><a href="" className={Style.a}>Join</a></li>


        </div>
        
    );
}
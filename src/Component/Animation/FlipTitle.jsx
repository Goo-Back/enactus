import React from "react";
import {easeInOut, hover, motion} from "framer-motion"
import './Fliptitle.css'
import { a, h1, link, section } from "framer-motion/client";
import { Link } from "react-router-dom";

export const title = () => {
    return(
        <section className="content">

        </section>
    )
}

export const Fliptitle = ({children ,href}) =>{ //le lien animee
    const Duration=0.25;
    const Decalage=0.025;
    return(
        <>
            <motion.a
            initial="initiale"
            whileHover="hovered"
            href={href}
            className="link-anime"
            style={{lineHeight:0.75}}
            />
         <div>
            {children.split("").map((l,i)=>( // selecter chaque lettre pour children
                <motion.span  
                variants={{
                    initial:{y:0},
                    hovered:{y:"-100%"},
                }}
                transition={{
                    duration:Duration ,
                    decalage:Decalage*i, //on traville par i pour que la duration de chaque element 
                    ease:"easeInOut", //transition lent -- vite -- lent
                }}
                className="w-animate"
                key={i} //Suivre les éléments entre les rendus (re-render)
                >
                    {l}
                    
                </motion.span>
            ))}
         </div>
         <div className="flip-content">
            {children.split("").map((l,i)=>( // selecter chaque lettre pour children
                <motion.span  
                variants={{
                    initial:{y:"100%"}, //mettre anime
                    hovered:{y:"0"},
                }}
                transition={{
                    duration:Duration ,
                    decalage:Decalage*i, //on traville par i pour que la duration de chaque element 
                    ease:"easeInOut", //transition lent -- vite -- lent
                }}
                className="w-animate"
                key={i} //Suivre les éléments entre les rendus (re-render)
                >
                    {l}
                    
                </motion.span>
            ))}
         </div>
        </>

    )
}



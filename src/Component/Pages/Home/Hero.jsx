import Style from'../../CSS/Home/Hero.module.css'
import enactus from '../../../../public/images/ENACTUS.png'
import Member from './Member';
import {color, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { style } from 'framer-motion/client';
import about from '../../../../public/images/Apropo/about.png'
import notremission from '../../../../public/images/Home/notremission.png'
import deuxieme from '.././../../../public/images/Home/Deuxieme.png'

export default function Hero(){
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5,0.5],
        ["18.5deg", "-18.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5,0.5],
        ["18.5deg", "-18.5deg"]
    );


    const handelMouseMove= (e)=>{
        const rect = e.target.getBoundingClientRect()

        const width = rect.width;
        const height = rect.height;

        const mouseX= e.clientX - rect.left;
        const mouseY= e.clientY - rect.top;

        const xPct = mouseX/width -0.5;
        const yPct = mouseY/height -0.5;

        x.set(xPct);
        y.set(yPct);

    };

    //Number animation

    return(
        <div className={Style.Main}>
            <div className={Style.main}>
             <div className={Style.container}>
                <h1 className={Style.h1}>Club <span className={Style.orang}>ENACTUS</span> ,FSBM</h1>
                <h2 className={Style.h2}>ENACTUS EST <span className={Style.orange}>La creativites L'innovation ...</span></h2>
                <p className={Style.p}>
                    Depuis cinq ans, je conçois et développe des logiciels pour des entreprises innovantes. En parallèle, je partage ma passion pour la peinture en donnant des cours en ligne. Si l’envie vous prend de créer ou de collaborer, n’hésitez pas à me contacter !
                </p>
                <a href="#" className={Style.a}>Explorer</a>
             </div>
             <div className={Style.container2}>
                <motion.div className={Style.b1} onMouseMove={handelMouseMove} style={{rotateX,rotateY,transformStyle : "preserve-3d"}}>
                    <div className={Style.b2}>
                        <img src={enactus} alt="logo" className={Style.b2img}/>
                    </div>
                </motion.div>
             </div>

            </div>
            <div className={Style.content}>
                <div className={Style.titledesc}>
                    <h2 className={Style.title1}>Notre Mission</h2>
                    <p className={Style.desc1}>Enactus FSBM a pour mission de mobiliser les étudiants en les encourageant à découvrir leur potentiel et à s’engager activement dans la société. À travers la réalisation de projets innovants, ils développent leur leadership et contribuent à apporter des solutions durables aux défis sociaux et environnementaux. Cette démarche permet aux étudiants de devenir des acteurs du changement, tout en cultivant leur esprit d’initiative et leur sens des responsabilités.</p>
                    <div className={Style.btn}><button className={Style.a} style={{border:"none"}}>Decouvrire</button></div>
                </div>
                <div className={Style.img1}>
                    <img src={notremission} alt="" className={Style.image1}/>
                </div>
            </div>
            <div className={Style.numbers}>
                <h1 className={Style.titleChifre}>Enactus FSBM en Chiffres</h1>
                <div className={Style.Iconcontent}>
                    <div className={Style.box}>
                        <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg></div>
                        <div className={Style.num}>2014</div>
                        <div className={Style.text}>Fundation</div>
                    </div>
                    <div className={Style.box}>
                        <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></div>
                        <div className={Style.num}>+1000</div>
                        <div className={Style.text}>Jeunes mobilisés</div>
                    </div>
                    <div className={Style.box}>
                        <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg></div>
                        <div className={Style.num}>+40</div>
                        <div className={Style.text}>Projets développés</div>
                    </div>
                    <div className={Style.box}>
                        <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/></svg></div>
                        <div className={Style.num}>+500</div>
                        <div className={Style.text}>Bénéficiaires impactés</div>
                    </div>
                    <div className={Style.box}>
                        <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg></div>
                        <div className={Style.num}>+3000</div>
                        <div className={Style.text}>Formation</div>
                    </div>
                    <div className={Style.box}>
                        <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z"/></svg></div>
                        <div className={Style.num}>13</div>
                        <div className={Style.text}>Développement durable</div>
                    </div>
                </div>
            </div>
            <Member></Member>
            <div className={Style.content}>
                <div className={Style.Img}>
                    <img src={deuxieme} alt="" className={Style.Image}/>
                </div>
                <div className={Style.titledesc}>
                    <h2 className={Style.title}>Enactus Maroc</h2>
                    <p className={Style.desc}>Enactus Maroc est une organisation qui encourage les étudiants à développer des projets d’entrepreneuriat social pour répondre aux besoins de leur communauté. Elle fait partie d’un réseau mondial qui forme de jeunes leaders engagés et porteurs de changement.</p>
                    <div className={Style.btn}><button className={Style.a}style={{border:"none"}}>Explorer</button></div>
                </div>
            </div>
        </div>

    );
}
import Style from '../../CSS/About_us/Apropo.module.css'
import about from '../../../../public/images/Apropo/about.png'
import ligue1 from '../../../../public/images/Apropo/Ligue1.png'
import demifinale from '../../../../public/images/Apropo/DemiFinal.png'


export default function Apropo(){

    return(
        <div className={Style.main}>
            <div className={Style.content}>
                <div className={Style.titledesc}>
                    <h2 className={Style.title}>Qui somme nous ?</h2>
                    <p className={Style.desc}>Enactus FSBM, fondée en mars 2014 par Abderazak Bouhram, est l'héritière d'initiatives lancées en 2009 sous l'appellation SIFE. Depuis sa création, l’équipe développe des projets à impact social et économique, mobilisant chaque année 50 à 100 membres. Enactus FSBM a récemment été classée parmi le top 12 du Maroc et a été demi-finaliste lors des compétitions 2023-2024</p>
                     <div className={Style.btn}><button className={Style.btn1}>Explorer</button></div>
                </div>
                <div className={Style.img}>
                    <img src={about} alt="" className={Style.image}/>
                </div>
            </div>
            <div className={Style.numbers}>
                <h2 className={Style.Title}>ACHIVEMENT</h2>
                            <div className={Style.Iconcontent}>
                                <div className={Style.box}>
                                    <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></div>
                                    <div className={Style.num}>2023-2024</div>
                                    <div className={Style.text}>Demi finaliste</div>
                                </div>
                                <div className={Style.box}>
                                    <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg></div>
                                    <div className={Style.num}>TOP 12</div>
                                    <div className={Style.text}>Au Maroc</div>
                                </div>
                                <div className={Style.box}>
                                    <div className={Style.icon}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ff8000"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg></div>
                                    <div className={Style.num}>Got Impact</div>
                                    <div className={Style.text}>Prix</div>
                                </div>
                            </div>
                        </div>
                <div className={Style.Competition}>
                    <h1 className={Style.Title1}>COMPETITION</h1>
                    <div className={Style.content}>
                        <div className={Style.titledesc}>
                            <h2 className={Style.title}>Demi finale</h2>
                            <p className={Style.desc}>La fin d'une aventure, mais le début d'une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l'aurait souhaité.L'histoire est en marche et nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM. The journey is ongoing. E la storia continua.</p>
                        </div> 
                        <div className={Style.img}>
                            <img src={demifinale} alt="" className={Style.image}/>
                        </div>
                    </div>
                    <div className={Style.content}>
                        <div className={Style.img}>
                            <img src={ligue1} alt="" className={Style.image}/>
                        </div>
                        <div className={Style.titledesc}>
                            <h2 className={Style.title}>Phase des ligues</h2>
                            <p className={Style.desc}>Le 29 juin 2024, en compétition à UIT Kenitra, Enactus FSBM a pris sa place méritée en tête, prouvant que la foi dépasse les statistiques. Malgré des chances qui semblaient minimes, c’est la confiance et l’esprit d’équipe qui ont dominé. Avec la certitude de se qualifier pour le prochain tour, chaque membre de l’équipe a fait preuve de détermination. Parce qu’en famille et entre coéquipiers, la force est décuplée, et ensemble, ils avancent vers de nouveaux défis avec la conviction que le meilleur est à venir.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
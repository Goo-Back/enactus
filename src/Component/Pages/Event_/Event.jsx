import Style from '../../CSS/Event_/Event.module.css'
import event1 from '../../../../public/images/event_/hackathon.png'
import event2 from '../../../../public/images/event_/8mars.png'
export default function Event (){

    return(
        <div className={Style.main}>
            <div className={Style.event1}>
                <div className={Style.contant1}>
                    <h3 className={Style.title}>HACKATHON</h3>
                    <h5 className={Style.h5_}> Journée Internationale des Droits des Femmes</h5>
                    <p className={Style.descreption1}>Le club Enactus FSBM a participé activement au Hackathon Orange, une compétition stimulante réunissant des jeunes passionnés par la technologie et l’innovation. Durant cet événement, les membres du club ont relevé le défi de proposer des solutions digitales à fort impact social. Grâce à leur esprit d’équipe, leur créativité et leur engagement, ils ont pu développer des prototypes innovants en un temps limité, tout en bénéficiant de l’accompagnement de mentors experts. Cette expérience a permis aux étudiants de renforcer leurs compétences en gestion de projet, en entrepreneuriat social et en innovation technologique.</p>
                </div>
                <div className={Style.Cadreimg}>
                    <img src={event1} alt="hackathon"  className={Style.img}/>
                </div>
            </div>
            <div className={Style.event2}>
                <div className={Style.Cadreimg}>
                    <img src={event2} alt="8mars"  className={Style.img}/>
                </div>
            <div className={Style.contant2}>
                    <h3 className={Style.title}>Célébration du 8 Mars</h3>
                    <h5 className={Style.h5_}> Journée Internationale des Droits des Femmes</h5>
                    <p className={Style.descreption2}>À l’occasion de la Journée Internationale des Droits des Femmes, le club Enactus FSBM a organisé un événement spécial le 8 mars visant à mettre en valeur les réalisations des femmes et à sensibiliser à l’égalité des genres. Cette journée a été marquée par des conférences inspirantes, des témoignages de femmes entrepreneures et des ateliers interactifs permettant aux participants de réfléchir sur le rôle crucial des femmes dans la société et l’entrepreneuriat social. L’événement a également été l’occasion de renforcer les liens entre les étudiants et les acteurs engagés pour une société plus inclusive.</p>
                </div>
            </div>
        
        </div>
    )
}
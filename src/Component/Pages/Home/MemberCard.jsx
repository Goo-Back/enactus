
import Style from "../../CSS/Home/MemberCard.module.css"
import { progressPercentage } from "framer-motion";

export default function MemberCard(prop){

    return(
       <div className={Style.container}>
        <div className={Style.card}>
            <div className={Style.contant}>
                <span className={Style.span}></span>
                <div className={Style.cadreImage}>
                    <img src={prop.src} alt="member" className={Style.cadreImg} /> 
                </div>
            </div>
            <div className={Style.CardContent}>
                <h2 className={Style.name}>{prop.post}</h2>
                <p className={Style.Description}>{prop.description}</p>
                <button className={Style.button}>Explorer</button>
            </div>
        </div>
       </div> 
    );
}
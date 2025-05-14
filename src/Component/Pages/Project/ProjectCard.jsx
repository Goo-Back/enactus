import Style from '../../CSS/Project/ProjectCard.module.css'
import img from '../../../../public/images/project/enbo.png'
export default function ProjectCard(prop){
    
    return(
        <div className={Style.container}>
            <div className={Style.product_box}>
                <img src={prop.image} alt="project" className={Style.image}/>
                <div className={Style.descreption}>
                    <h2 className={Style.h2}>{prop.name}</h2>
                    <p className={Style.p}>{prop.descreption}</p>
                    <button className={Style.button}>voir plus </button>
                </div>
            </div>
        </div>
    )
}
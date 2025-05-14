import Style from "../../CSS/Project/Project.module.css"
import ProjectCard from "./ProjectCard"
import { ProjectData } from "../../../Data"
import { useState } from "react"

export default function Project(){
    const [filteredData, setFiltredData] = useState(ProjectData)
    function filterProject(param) {
        if(param=="all"){
            setFiltredData(ProjectData);
        }else{
            const result = ProjectData.filter(item=> item.statue == param)
            setFiltredData(result);
        }
    }

    return(
        <div className={Style.container}>
            <div className={Style.wrapper}>
                <div className={Style.searchContainer}>
                    <input type="search" className={Style.input} id="search-input" placeholder="chercher des project ici ..." />
                    <button id="search" className={Style.button}>Chercher</button>
                </div>
                <div className={Style.buttons}>
                    <button className={Style.buttonValue} onClick={() =>filterProject('all')}>All</button>
                    <button className={Style.buttonValue} onClick={() =>filterProject('Ligue1')}>Ligue 1</button>
                    <button className={Style.buttonValue} onClick={() =>filterProject('DemiFinal')}>Demi Final</button>
                    <button className={Style.buttonValue} onClick={() =>filterProject('Final')}>Final</button>
                    <button className={Style.buttonValue} onClick={() =>filterProject('Champion')}>Champions</button>
                </div>
                <div className={Style.cardContant} >
                {
                    filteredData.map((prev=>
                        <ProjectCard key={prev.id} image={prev.image} name={prev.name} descreption={prev.descreption}></ProjectCard>
                    ))
                }</div>

            </div>
        </div>
    )
}
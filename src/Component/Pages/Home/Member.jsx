
import Style from "../../CSS/Home/Member.module.css"
import MemberCard from "./MemberCard"
import {MemberData} from "../../../Data"
import { useState , useEffect} from "react"
import { MemoryRouter } from "react-router-dom";
export default function Member(){

 const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1); // Téléphone
      } else if (width < 1024) {
        setCardsToShow(2); // Tablette
      } else {
        setCardsToShow(3); // Ordinateur (optionnel)
      }
    };

    updateCardCount(); // Appel initial
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);




const [currentIndex, setcurrentIndex] = useState(0);

  const handelPrev = () => {
    setcurrentIndex((prev) =>
      (prev - 1 + MemberData.length) % MemberData.length
    );
  };

  const handleNext = () => {
    setcurrentIndex((prev) => (prev + 1) % MemberData.length);
  };

  const visibleMember = Array.from({ length: cardsToShow }, (_, i) =>
    MemberData[(currentIndex + i) % MemberData.length]
  );

    return(
        <div className={Style.contant}>
            <h1 className={Style.titleChifre}>Membres</h1>
            <div className={Style.slideContent}>
            <div className={Style.gauch}>
            <svg onClick={handelPrev} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </div>
            <div className={Style.cardContainer}>
            {visibleMember.map((Member,index)=>
                (
                    <MemberCard 
                        key={Member.id}
                        post={Member.poste}
                        description={Member.description}
                        src={Member.src}
                    ></MemberCard>
                )
            )
            }
            </div>
            <div className={Style.droit}>
            <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            </div>
            </div>
            <div className={Style.icone}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="black"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
            </div>
        </div>
    )
 }
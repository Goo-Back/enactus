import Style from "../../CSS/LoginSigne_up/LoginSigne_up.module.css"
import { useState } from "react"
import "./btn.css"

export default function LoginSigne_up(){
    const [action,setaction]=useState('se connecter')
    return(
        <div className={Style.main}>
         <div className={Style.container}>
            <div className={Style.header}>
                <div className={Style.text}>{action}</div>
                <div className={Style.underline}></div>
            </div>
            <div className={Style.inputs}>
                {
                action==="Login"?<div></div>:<div className={Style.input}>
                    <div className={Style.img}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></div>
                    <input type="text" className={Style.input_} placeholder="Name"/>
                </div>
                }
                <div className={Style.input}>
                <div className={Style.img}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></div>
                    <input type="email" className={Style.input_} placeholder="Email"/>
                </div>
                <div className={Style.input}>
                    <div className={Style.img}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></div>
                    <input type="password" className={Style.input_} placeholder="Password"/>
                </div>
            </div>
            <div className={Style.forgetPassword}>Mot de passe oublié ?<span className={Style.span}> Cliquez ici !</span></div>
            <div className={Style.submitmain}>
                <div className={action === 'se connecter' ? "gray" : "submit"} onClick={() => setaction("s'inscrire")}>s'inscrire</div>
                <div className={action === "s'inscrire" ? "gray" : "submit"} onClick={() => setaction("se connecter")}>se connecter</div>

            </div>
         </div>
        </div>
    )
}
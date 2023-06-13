import React from "react"; 
import email from "../assets/email.png"

export default function Footer(){
    return(
<div className = "footer">
    <a href="https://www.linkedin.com/in/shelby-francisco-111948100/"><img src="./SFran_React_Portfolio/linkedin.png" alt ="linkedin logo" width="30px"></img></a>
    <a href="mailto:shelbyfrancisco@hotmail.com"><img src={email} alt ="email logo" width="30px"></img></a>
    <a href="https://github.com/Shelcisco"><img src="/github.png" alt ="github logo" width="35px"></img></a>
   </div>



    )
}


import React, { useState } from "react"; 


export default function Main({page}){

    const vapdEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    var [email,setEmail] = useState ("");
    var [emailError,setEmailError] = useState (false);
    function vapdateEmail () {
        setEmailError (!vapdEmail.test(email))
    }

    var [name,setName] = useState ("");
    var [nameError,setNameError] = useState (false);
    function vapdateName () {
        setNameError (name.trim()=="")

    }

    var [message,setMessage] = useState ("");
    var [messageError,setMessageError] = useState (false);
    function vapdateMessage () {
        setMessageError (message.trim()=="")

    }

    
const renderPage = ()=>{
    switch (page){
        case("about"):
        return (
            <div>
                <h1>About Me</h1>
                <p> <img src="/Mee.jpg" height="100" alt="" id = "me"></img> Hi there, my name is Shelby. After working in finanacials for years I wanted to try something more creative than crunching numbers, I took a big step and signed up for the UW's coding bootcamp.</p> 
 <p>While there's nothing wrong with crunching, I've found I prefer coding! I'm consistently working to improve my skills, please see below to see what I've built so far. Thank you!  </p>
            </div>
        )
        case("main"):
        return (
            <div className="text-center">
                <h1>Portfolio</h1>
                <div className="flex-row justify-center">
                <div className= "card-container flex-col">
                <img src="/cosmic.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Cosmic Climate </h3>
                <p id="text">Project description</p>
                <div className="flex-row text-center">
                    <br></br>
                <button className= "card-btn flex-col">Github Repo</button>
                <button className= "card-btn flex-col">live Site</button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/sleep.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Sleep Sync </h3>
                <p id="text">Project description</p>
                <div className="flex-row text-center">
                <br></br>
                <button className= "card-btn flex-col">Github Repo</button>
                <button className= "card-btn flex-col">live Site</button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/notetaker.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Note Taker Express </h3>
                <p id="text">Project description</p>
                <div className="flex-row text-center">
                <br></br>
                <button className= "card-btn flex-col">Github Repo</button>
                <button className= "card-btn flex-col">live Site</button>
                </div>
                </div>
                </div>
                <div className="flex-row justify-center">
                <div className= "card-container flex-col">
                <img src="/planner.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Workday Planner </h3>
                <p id="text">Project description</p>
                <div className="flex-row text-center">
                <br></br>
                <button className= "card-btn flex-col">Github Repo</button>
                <button className= "card-btn flex-col">live Site</button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/weather.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Weather Now </h3>
                <p id="text">Project description</p>
                <div className="flex-row text-center">
                <br></br>
                <button className= "card-btn flex-col">Github Repo</button>
                <button className= "card-btn flex-col">live Site</button>
                </div>
                </div>
                <div className= "card-container flex-col">
                <img src="/codequiz.png" height="150" alt="" id = "cardImage"></img>
                <h3 id="text"> Coding Quiz </h3>
                <p id="text">Project description</p>
                <div className="flex-row text-center">
                <br></br>
                <button className= "card-btn flex-col">Github Repo</button>
                <button className= "card-btn flex-col">live Site</button>
                </div>
                </div>
                </div>
               </div>
        )

        case("resume"):
        return (
            <div className="text-center">
                <h1>Resume</h1>
                <div className= "res-container text-center justify-center">  
                <p><a href="/email.png" download> Download</a> Resume</p> 
                
                
      <div id="text">
      <h3>Front-end Proficiencies</h3>
        <p >HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>JQuery</p>
        <p>responsive design</p>
        <p>React</p>
        <p>Bootstrap</p>
      </div>

      
      
      <div id="text">
      <h3 id="text">Back-end Proficiencies</h3>
        <p >APIs</p>
        <p>Node.js</p>
        <p>Express</p>
        <p>MySQL, Sequepze</p>
        <p>MongoDB, Mongoose</p>
        <p>REST</p>
        <p>GraphQL</p>
      </div>
      </div>
            </div>
        )

        case("contact"):
        return (
            <form className="justify-center">
                <h1>Contact</h1>
                <input className="form-input"
                type="email" 
                placeholder = "Email"
                value = {
                    email
                }
                onChange={(event)=>setEmail(event.target.value)}
                onBlur={vapdateEmail}
                >
                </input>
                {emailError && <h5 className="error">Please enter vapd email</h5>}
                <br></br>
                <input className="form-input"
                type="text" 
                placeholder = "Name"
                value = {
                    name
                }
                onChange={(event)=>setName(event.target.value)}
                onBlur={vapdateName}
                >
                </input>
                {nameError && <h5 className="error" >Please enter name</h5>}
                <br></br>
                <input className="form-input"
                type="text" 
                placeholder = "Message"
                value = {
                    message
                }
                onChange={(event)=>setMessage(event.target.value)}
                onBlur={vapdateMessage}
                >
                </input>
                {messageError && <h5 className="error" >Please enter message</h5>}
                <br></br>
                <button className="btn">Submit</button>
                <br></br>
            </form>
        )
    }
}

    return(
<div className="container">
    {renderPage()}
</div>
    )
}


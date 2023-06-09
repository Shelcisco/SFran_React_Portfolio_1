import React from "react"; 


export default function Main({page}){
    
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
            <div>
                <h1>Portfolio</h1>
                <div className= "card-container">
                <img src="/cosmic.png" height="150" alt="" id = "cosmic"></img>
                <h3 id = "cosmic"> Cosmic Climate </h3>
                <p>Project description</p>
                <button className= "card-btn">Github Repo</button>
                <button className= "card-btn">Live Site</button>
                </div>
                <div className= "card-container">
                <img src="/sleep.png" height="150" alt="" id = "cosmic"></img>
                <h3 id = "cosmic"> Cosmic Climate </h3>
                <p>Project description</p>
                <button className= "card-btn">Github Repo</button>
                <button className= "card-btn">Live Site</button>
                </div>
                <div className= "card-container">
                <img src="/notetaker.png" height="150" alt="" id = "cosmic"></img>
                <h3 id = "cosmic"> Cosmic Climate </h3>
                <p>Project description</p>
                <button className= "card-btn">Github Repo</button>
                <button className= "card-btn">Live Site</button>
                </div>
                <div className= "card-container">
                <img src="/planner.png" height="150" alt="" id = "cosmic"></img>
                <h3 id = "cosmic"> Cosmic Climate </h3>
                <p>Project description</p>
                <button className= "card-btn">Github Repo</button>
                <button className= "card-btn">Live Site</button>
                </div>
                <div className= "card-container">
                <img src="/weather.png" height="150" alt="" id = "cosmic"></img>
                <h3 id = "cosmic"> Cosmic Climate </h3>
                <p>Project description</p>
                <button className= "card-btn">Github Repo</button>
                <button className= "card-btn">Live Site</button>
                </div>
                <div className= "card-container">
                <img src="/codequiz.png" height="150" alt="" id = "cosmic"></img>
                <h3 id = "cosmic"> Cosmic Climate </h3>
                <p>Project description</p>
                <button className= "card-btn" id = "git">Github Repo</button>
                <button className= "card-btn" id = "live">Live Site</button>
                </div>
               </div>
        )

        case("resume"):
        return (
            <div>
                <h1>Resume</h1>
                <div className= "res-container">   
                <h4 id="container-title">Front-end Proficiencies</h4>
                
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h4>Back-end Proficiencies</h4>
      
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </div>
            </div>
        )

        case("contact"):
        return (
            <div>
                <h1>Contact</h1>
                
            </div>
        )
    }
}

    return(
<div className="container">
    {renderPage()}
</div>
    )
}

